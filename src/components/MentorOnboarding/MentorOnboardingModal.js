import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Modal,
  TextField,
  useMediaQuery,
  Typography,
  FormControl,
  InputLabel,
  FormHelperText,
  MenuItem,
  Select,
} from '@material-ui/core';
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
const MAX_CHARS = 'Must be no more than 128 characters';
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
  const isMobile = useMediaQuery('(max-width:1023px)');
  const {
    root,
    modal,
    h4Heading,
    textField,
    buttonModal,
    subheading,
    heading,
  } = useStyles({
    isMobile: isMobile,
  });

  const [open, setOpen] = useState(opened);

  const onSubmit = data => {
    console.log(data);
    setOpen(false);
  };

  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(OnboardingSchema),
  });

  const [selected, setSelected] = useState(true);
  function handleSelect() {
    setSelected(false);
  }

  const timezoneMenu = array => {
    return array.map(({ offset, name }) => (
      <MenuItem key={name} value={offset}>
        {offset} {name}
      </MenuItem>
    ));
  };

  const formContent = (
    <form className={root} onSubmit={handleSubmit(mockOnSubmit || onSubmit)}>
      <div className={modal}>
        <div align="center">
          <h2 className={heading}>Almost there!</h2>
          <h5 className={subheading}>
            We'll need to confirm a few things about you.
          </h5>
        </div>
        <Typography variant="h4" className={h4Heading}>
          {BIO}
        </Typography>
        <TextField
          {...{
            id: 'bio',
            multiline: true,
            rows: 3,
            rowsMax: 3,
            variant: 'outlined',
            className: textField,
            placeholder: 'Add bio here.',
            name: 'bio',
            inputRef: register,
            error: !isEmpty(errors.bio),
            helperText: errors.bio && errors.bio.message,
          }}
        />
        <Typography variant="h4" className={h4Heading}>
          {SKILLS}
        </Typography>
        <input type="hidden" id="skills" name="skills" ref={register} />
        <Autocomplete
          {...{
            multiple: true,
            options: topSkills,
            getOptionLabel: option => option.title,
            filterSelectedOptions: true,
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
                  variant: 'outlined',
                  className: textField,
                  placeholder: 'Select Skills',
                  error: !isEmpty(errors.skills),
                  helperText: errors.skills && errors.skills.message,
                }}
              />
            ),
          }}
        />
        <Typography variant="h4" className={h4Heading}>
          {PHONE}
        </Typography>
        <TextField
          {...{
            id: 'phone',
            className: textField,
            placeholder: '718-777-4545',
            variant: 'outlined',
            name: 'phone',
            type: 'text',
            inputRef: register,
            error: !isEmpty(errors.phone),
            helperText: errors.phone && errors.phone.message,
          }}
        />
        <Typography variant="h4" className={h4Heading}>
          {TIME_ZONE}
        </Typography>
        <input type="hidden" id="timezone" name="timezone" ref={register} />
        <FormControl variant="outlined" className={textField}>
          <InputLabel shrink={false} htmlFor="timezone">
            {selected ? 'Select a time zone' : ''}
          </InputLabel>

          <Select
            {...{
              'data-testid': 'timezone',
              name: 'timezone',
              defaultValue: '',
              error: !isEmpty(errors.timezone),
              onChange: e => {
                setValue('timezone', e.target.value, { shouldValidate: true });
                handleSelect();
              },
            }}
          >
            {timezoneMenu(timeZoneData)}
          </Select>
          <FormHelperText error>
            {errors.timezone && errors.timezone.message}
          </FormHelperText>
        </FormControl>

        <Typography variant="h4" className={h4Heading}>
          {GOOGLE_MEET}
        </Typography>
        <TextField
          {...{
            id: 'googlemeet',
            placeholder: 'Add google meet link',
            variant: 'outlined',
            className: textField,
            name: 'googlemeet',
            type: 'text',
            inputRef: register,
            error: !isEmpty(errors.googlemeet),
            helperText: errors.googlemeet && errors.googlemeet.message,
          }}
        />
        <button type="submit" className={buttonModal}>
          I'M GOOD TO GO!
        </button>
      </div>
    </form>
  );

  return <Modal open={open}>{formContent}</Modal>;
};

export default MentorOnboardingModal;
