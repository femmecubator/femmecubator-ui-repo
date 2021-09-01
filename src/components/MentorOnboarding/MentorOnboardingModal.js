import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, useMediaQuery, Paper, Button } from '@material-ui/core';
import FocusTrapOverlay from '../FocusTrapOverlay';
import Autocomplete from '@material-ui/lab/Autocomplete';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useStyles from './MentorOnboardingModal.styles';
import timeZoneData from './timezoneArray';
import topSkills from './topSkills';
import { isEmpty } from 'lodash';

const BIO = 'Add a Bio (128 char)';
const SKILLS = 'Skills (eg. tech stack, anything you can offer help with.)';
const PHONE = 'Phone';
const TIME_ZONE = 'Your Time Zone';
const GOOGLE_MEET = 'Add a google meet:';
const MAX_CHARS = 'Bio must be no more than 128 characters';
const PHONE_VAL = 'Phone number is not valid';
const GOOGLE_MEET_VAL = 'Google meet link is not valid';

const OnboardingSchema = yup.object().shape({
  bio: yup.string().required('Bio is required').max(128, MAX_CHARS),
  skills: yup.string().required('One skill is required'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^\+?1?[ .-]?\(?\d{3}\)?[ .-]?\d{3}[ .-]?\d{4}$/, PHONE_VAL),
  timezone: yup.string().required('Timezone is required'),
  googlemeet: yup
    .string()
    .required('Google meet is required')
    .matches(
      /^(http[s]?:\/\/)?(www\.)?(meet\.google\.com\/(?:\w{3}-\w{4}-\w{3}))?$/,
      GOOGLE_MEET_VAL
    ),
});

const MentorOnboardingModal = ({ opened, mockOnSubmit }) => {
  const isMobile = useMediaQuery('(max-width:1024px)');
  const {
    modal,
    labelText,
    modalSubmit,
    subheading,
    heading,
    inputField,
    formContainer,
  } = useStyles({
    isMobile: isMobile,
  });

  const [open, setOpen] = useState(opened);

  const onSubmit = () => {
    // PUT/PATCH request to update bio etc.
    setOpen(false);
  };

  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(OnboardingSchema),
  });

  const formContent = (
    <form
      className={formContainer}
      onSubmit={handleSubmit(mockOnSubmit || onSubmit)}
    >
      <div align="center">
        <h2 id="mentorOnboardingTitle" className={heading}>
          Almost there!
        </h2>
        <h3 id="mentorOnboardingDesc" className={subheading}>
          We'll need to confirm a few things about you.
        </h3>
      </div>
      <label htmlFor="bio" className={labelText}>
        {BIO}
      </label>
      <TextField
        {...{
          id: 'bio',
          multiline: true,
          rows: 3,
          rowsMax: 3,
          variant: 'outlined',
          className: inputField,
          placeholder: 'Add bio here.',
          name: 'bio',
          size: 'small',
          inputRef: register,
          error: !isEmpty(errors.bio),
          helperText: errors.bio && errors.bio.message,
        }}
      />
      <label id="skills-label" htmlFor="skills" className={labelText}>
        {SKILLS}
      </label>
      <input type="hidden" id="skills" name="skills" ref={register} />
      <Autocomplete
        {...{
          multiple: true,
          options: topSkills,
          getOptionLabel: option => option.title,
          filterSelectedOptions: true,
          className: inputField,
          size: 'small',
          'data-testid': 'skills',
          onChange: (event, newValue) => {
            setValue(
              'skills',
              newValue.map(option => option.title),
              { shouldValidate: true }
            );
          },
          renderInput: params => (
            <TextField
              {...{
                ...params,
                'aria-labelledby': 'skills-label',
                variant: 'outlined',
                placeholder: 'Select Skills',
                error: !isEmpty(errors.skills),
                helperText: errors.skills && errors.skills.message,
              }}
            />
          ),
        }}
      />
      <label htmlFor="phone" className={labelText}>
        {PHONE}
      </label>
      <TextField
        {...{
          id: 'phone',
          className: inputField,
          placeholder: '718-777-4545',
          variant: 'outlined',
          name: 'phone',
          type: 'text',
          size: 'small',
          inputRef: register,
          error: !isEmpty(errors.phone),
          helperText: errors.phone && errors.phone.message,
        }}
      />
      <label htmlFor="timezone" className={labelText}>
        {TIME_ZONE}
      </label>
      <Autocomplete
        {...{
          options: timeZoneData,
          getOptionLabel: ({ offset, name }) => `${offset} ${name}`,
          className: inputField,
          size: 'small',
          onChange: (event, newValue) => {
            const value = newValue ? newValue.offset : null;
            setValue('timezone', value, { shouldValidate: true });
          },
          renderInput: params => (
            <TextField
              {...{
                ...params,
                id: 'timezone',
                name: 'timezone',
                variant: 'outlined',
                'data-testid': 'timezone',
                placeholder: 'Select a timezone',
                inputRef: register,
                error: !isEmpty(errors.timezone),
                helperText: errors.timezone && errors.timezone.message,
              }}
            />
          ),
        }}
      />
      <label htmlFor="googlemeet" className={labelText}>
        {GOOGLE_MEET}
      </label>
      <TextField
        {...{
          id: 'googlemeet',
          placeholder: 'Add google meet link',
          variant: 'outlined',
          className: inputField,
          size: 'small',
          name: 'googlemeet',
          type: 'text',
          inputRef: register,
          error: !isEmpty(errors.googlemeet),
          helperText: errors.googlemeet && errors.googlemeet.message,
        }}
      />
      <Button type="submit" className={modalSubmit}>
        I'M GOOD TO GO!
      </Button>
    </form>
  );

  return (
    <FocusTrapOverlay open={open}>
      <Paper
        {...{
          role: 'alertdialog',
          'aria-labelledby': 'mentorOnboardingTitle',
          'aria-describedby': 'mentorOnboardingDesc',
          id: 'mentor-onboarding',
          'aria-label': 'Mentor onboarding modal',
          className: modal,
        }}
      >
        {formContent}
      </Paper>
    </FocusTrapOverlay>
  );
};

export default MentorOnboardingModal;
