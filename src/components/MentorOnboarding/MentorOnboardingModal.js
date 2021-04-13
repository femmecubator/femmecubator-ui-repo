import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Modal,
  TextField,
  useMediaQuery,
  Typography,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import useStyles from './MentorOnboardingModal.styles';
import timeZoneData from './timezoneArray';
import topSkills from './topSkills';

// headings & validation
const BIO = 'Add a Bio (128 char)';
const SKILLS = 'Skills (eg. tech stack, anything you can offer help with.)';
const PHONE = 'Phone';
const TIME_ZONE = 'Your Time Zone';
const GOOGLE_MEET = 'Add a google meet:';
const MIN_CHARS = 'Must be more than 1 character';
const MAX_CHARS = 'Must be no more than 128 characters';
const PHONE_VAL = 'Phone number is not valid';

const MentorOnboardingModal = () => {
  // const isMobile = useMediaQuery('(max-width:1023px)');
  const {
    root,
    modal,
    h4Heading,
    textField,
    buttonModal,
    subheading,
    heading,
  } = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // for timezone select
  const [selected, setSelected] = useState(true);
  function handleSelect() {
    setSelected(false);
  }

  const onSubmit = (data, e) => {
    console.log(data);
  };

  // for validation
  const OnboardingSchema = yup.object().shape({
    bio: yup
      .string()
      .required('Bio is required')
      .min(2, MIN_CHARS)
      .max(128, MAX_CHARS),
    skills: yup.string().required('One skill is required'),
    phone: yup
      .string()
      .required('Phone number is required')
      .min(8)
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        PHONE_VAL
      ),
    // phone field should be auto formatted (controlled field)
    timezone: yup.string().required('Timezone is required'),
    googlemeet: yup.string().required('Google meet is required'),
    // google meet link field should start with (google.meet.com/)
  });
  const {
    unregister,
    register,
    handleSubmit,
    errors,
    setValue,
    setError,
    watch,
    getValues,
  } = useForm({
    revalidateMode: 'onChange',
    // resolver: yupResolver(OnboardingSchema),
  });

  // for select timezone
  useEffect(() => {
    register('timezone');
    return () => unregister('timezone');
  }, [register, unregister]);

  // STUFF I STILL NEED
  // TESTS
  // Should show any errors if input is invalid
  // disable submit button if fields are not valid
  // must be WCAG compliant - andi guy site
  // must be mobile responsive

  const body = (
    <form className={root} onSubmit={handleSubmit(onSubmit)}>
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
          }}
        />
        <Typography variant="h4" className={h4Heading}>
          {SKILLS}
        </Typography>
        <input type="hidden" id="skills" name="skills" ref={register} />
        <Autocomplete
          multiple
          options={topSkills}
          getOptionLabel={(option) => option.title}
          filterSelectedOptions
          onChange={(event, newValue) => {
            setValue(
              'skills',
              newValue.map((option) => option.title)
            );

            console.log(getValues('skills'));
          }}
          renderInput={(params) => (
            <TextField
              {...{
                ...params,
                variant: 'outlined',
                className: textField,
                placeholder: 'Select Skills',
              }}
            />
          )}
        />
        <Typography variant="h4" className={h4Heading}>
          {PHONE}
        </Typography>
        <TextField
          {...{
            id: 'phone',
            placeholder: '718-777-4545',
            variant: 'outlined',
            className: textField,
            name: 'phone',
            type: 'text',
            inputRef: register,
          }}
        />
        <Typography variant="h4" className={h4Heading}>
          {TIME_ZONE}
        </Typography>
        <FormControl variant="outlined" className={textField}>
          <InputLabel shrink={false} htmlFor="timezone placeholder">
            {selected ? 'Select a time zone' : ''}
          </InputLabel>
          <Select
            name="timezone"
            defaultValue=""
            onChange={(e) => {
              setValue('timezone', e.target.value, { shouldDirty: true });
              handleSelect();
            }}
          >
            {timeZoneData.map(({ offset, name }) => (
              <MenuItem key={name} value={offset}>
                {offset} {name}
              </MenuItem>
            ))}
          </Select>
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
          }}
        />
        <button type="submit" className={buttonModal}>
          I'M GOOD TO GO!
        </button>
      </div>
    </form>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
};

export default MentorOnboardingModal;
