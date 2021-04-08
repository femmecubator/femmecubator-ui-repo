import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Paper,
  Modal,
  TextField,
  Button,
  useMediaQuery,
  FormControl,
  Link,
  Typography,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import useStyles from './MentorOnboardingModal.styles';

// headings & validation
const BIO = 'Add a Bio (128 char)';
const SKILLS = 'Skills (eg. tech stack, anything you can offer help with.)';
const PHONE = 'Phone';
const TIME_ZONE = 'Your Time Zone';
const GOOGLE_MEET = 'Add a google meet:';
const MIN_CHARS = 'Must be more than 1 character';
const MAX_CHARS = 'Must be no more than 128 characters';

const MentorOnboardingModal = () => {
  const isMobile = useMediaQuery('(max-width:1023px)');
  const styles = useStyles({
    isMobile: isMobile,
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const timeZoneData = [
    {
      offset: 'GMT-12:00',
      name: 'Etc/GMT-12',
    },
    {
      offset: 'GMT-11:00',
      name: 'Etc/GMT-11',
    },
    {
      offset: 'GMT-11:00',
      name: 'Pacific/Midway',
    },
    {
      offset: 'GMT-10:00',
      name: 'America/Adak',
    },
    {
      offset: 'GMT-09:00',
      name: 'America/Anchorage',
    },
    {
      offset: 'GMT-09:00',
      name: 'Pacific/Gambier',
    },
    {
      offset: 'GMT-08:00',
      name: 'America/Dawson_Creek',
    },
    {
      offset: 'GMT-08:00',
      name: 'America/Ensenada',
    },
    {
      offset: 'GMT-08:00',
      name: 'America/Los_Angeles',
    },
    {
      offset: 'GMT-07:00',
      name: 'America/Chihuahua',
    },
    {
      offset: 'GMT-07:00',
      name: 'America/Denver',
    },
    {
      offset: 'GMT-06:00',
      name: 'America/Belize',
    },
    {
      offset: 'GMT-06:00',
      name: 'America/Cancun',
    },
    {
      offset: 'GMT-06:00',
      name: 'America/Chicago',
    },
    {
      offset: 'GMT-06:00',
      name: 'Chile/EasterIsland',
    },
    {
      offset: 'GMT-05:00',
      name: 'America/Bogota',
    },
    {
      offset: 'GMT-05:00',
      name: 'America/Havana',
    },
    {
      offset: 'GMT-05:00',
      name: 'America/New_York',
    },
    {
      offset: 'GMT-04:30',
      name: 'America/Caracas',
    },
    {
      offset: 'GMT-04:00',
      name: 'America/Campo_Grande',
    },
    {
      offset: 'GMT-04:00',
      name: 'America/Glace_Bay',
    },
    {
      offset: 'GMT-04:00',
      name: 'America/Goose_Bay',
    },
    {
      offset: 'GMT-04:00',
      name: 'America/Santiago',
    },
    {
      offset: 'GMT-04:00',
      name: 'America/La_Paz',
    },
    {
      offset: 'GMT-03:00',
      name: 'America/Argentina/Buenos_Aires',
    },
    {
      offset: 'GMT-03:00',
      name: 'America/Montevideo',
    },
    {
      offset: 'GMT-03:00',
      name: 'America/Araguaina',
    },
    {
      offset: 'GMT-03:00',
      name: 'America/Godthab',
    },
    {
      offset: 'GMT-03:00',
      name: 'America/Miquelon',
    },
    {
      offset: 'GMT-03:00',
      name: 'America/Sao_Paulo',
    },
    {
      offset: 'GMT-03:30',
      name: 'America/St_Johns',
    },
    {
      offset: 'GMT-02:00',
      name: 'America/Noronha',
    },
    {
      offset: 'GMT-01:00',
      name: 'Atlantic/Cape_Verde',
    },
    {
      offset: 'GMT',
      name: 'Europe/Belfast',
    },
    {
      offset: 'GMT',
      name: 'Africa/Abidjan',
    },
    {
      offset: 'GMT',
      name: 'Europe/Dublin',
    },
    {
      offset: 'GMT',
      name: 'Europe/Lisbon',
    },
    {
      offset: 'GMT',
      name: 'Europe/London',
    },
    {
      offset: 'UTC',
      name: 'UTC',
    },
    {
      offset: 'GMT+01:00',
      name: 'Africa/Algiers',
    },
    {
      offset: 'GMT+01:00',
      name: 'Africa/Windhoek',
    },
    {
      offset: 'GMT+01:00',
      name: 'Atlantic/Azores',
    },
    {
      offset: 'GMT+01:00',
      name: 'Atlantic/Stanley',
    },
    {
      offset: 'GMT+01:00',
      name: 'Europe/Amsterdam',
    },
    {
      offset: 'GMT+01:00',
      name: 'Europe/Belgrade',
    },
    {
      offset: 'GMT+01:00',
      name: 'Europe/Brussels',
    },
    {
      offset: 'GMT+02:00',
      name: 'Africa/Cairo',
    },
    {
      offset: 'GMT+02:00',
      name: 'Africa/Blantyre',
    },
    {
      offset: 'GMT+02:00',
      name: 'Asia/Beirut',
    },
    {
      offset: 'GMT+02:00',
      name: 'Asia/Damascus',
    },
    {
      offset: 'GMT+02:00',
      name: 'Asia/Gaza',
    },
    {
      offset: 'GMT+02:00',
      name: 'Asia/Jerusalem',
    },
    {
      offset: 'GMT+03:00',
      name: 'Africa/Addis_Ababa',
    },
    {
      offset: 'GMT+03:00',
      name: 'Asia/Riyadh89',
    },
    {
      offset: 'GMT+03:00',
      name: 'Europe/Minsk',
    },
    {
      offset: 'GMT+03:30',
      name: 'Asia/Tehran',
    },
    {
      offset: 'GMT+04:00',
      name: 'Asia/Dubai',
    },
    {
      offset: 'GMT+04:00',
      name: 'Asia/Yerevan',
    },
    {
      offset: 'GMT+04:00',
      name: 'Europe/Moscow',
    },
    {
      offset: 'GMT+04:30',
      name: 'Asia/Kabul',
    },
    {
      offset: 'GMT+05:00',
      name: 'Asia/Tashkent',
    },
    {
      offset: 'GMT+05:30',
      name: 'Asia/Kolkata',
    },
    {
      offset: 'GMT+05:45',
      name: 'Asia/Katmandu',
    },
    {
      offset: 'GMT+06:00',
      name: 'Asia/Dhaka',
    },
    {
      offset: 'GMT+06:00',
      name: 'Asia/Yekaterinburg',
    },
    {
      offset: 'GMT+06:30',
      name: 'Asia/Rangoon',
    },
    {
      offset: 'GMT+07:00',
      name: 'Asia/Bangkok',
    },
    {
      offset: 'GMT+07:00',
      name: 'Asia/Novosibirsk',
    },
    {
      offset: 'GMT+08:00',
      name: 'Etc/GMT+8',
    },
    {
      offset: 'GMT+08:00',
      name: 'Asia/Hong_Kong',
    },
    {
      offset: 'GMT+08:00',
      name: 'Asia/Krasnoyarsk',
    },
    {
      offset: 'GMT+08:00',
      name: 'Australia/Perth',
    },
    {
      offset: 'GMT+08:45',
      name: 'Australia/Eucla',
    },
    {
      offset: 'GMT+09:00',
      name: 'Asia/Irkutsk',
    },
    {
      offset: 'GMT+09:00',
      name: 'Asia/Seoul',
    },
    {
      offset: 'GMT+09:00',
      name: 'Asia/Tokyo',
    },
    {
      offset: 'GMT+09:30',
      name: 'Australia/Adelaide',
    },
    {
      offset: 'GMT+09:30',
      name: 'Australia/Darwin',
    },
    {
      offset: 'GMT+09:30',
      name: 'Pacific/Marquesas',
    },
    {
      offset: 'GMT+10:00',
      name: 'Etc/GMT+10',
    },
    {
      offset: 'GMT+10:00',
      name: 'Australia/Brisbane',
    },
    {
      offset: 'GMT+10:00',
      name: 'Australia/Hobart',
    },
    {
      offset: 'GMT+10:00',
      name: 'Asia/Yakutsk',
    },
    {
      offset: 'GMT+10:30',
      name: 'Australia/Lord_Howe',
    },
    {
      offset: 'GMT+11:00',
      name: 'Asia/Vladivostok',
    },
    {
      offset: 'GMT+11:30',
      name: 'Pacific/Norfolk',
    },
    {
      offset: 'GMT+12:00',
      name: 'Etc/GMT+12',
    },
    {
      offset: 'GMT+12:00',
      name: 'Asia/Anadyr',
    },
    {
      offset: 'GMT+12:00',
      name: 'Asia/Magadan',
    },
    {
      offset: 'GMT+12:00',
      name: 'Pacific/Auckland',
    },
    {
      offset: 'GMT+12:45',
      name: 'Pacific/Chatham',
    },
    {
      offset: 'GMT+13:00',
      name: 'Pacific/Tongatapu',
    },
    {
      offset: 'GMT+14:00',
      name: 'Pacific/Kiritimati',
    },
  ];
  const topSkills = [
    { title: 'Algorithms' },
    { title: 'Analytical Skills' },
    { title: 'Big Data' },
    { title: 'Calculating' },
    { title: 'Compiling Statistics' },
    { title: 'Data Analytics' },
    { title: 'Data Mining' },
    { title: 'Database Design' },
    { title: 'Database Management' },
    { title: 'Documentation' },
    { title: 'Modeling' },
    { title: 'Modification' },
    { title: 'Needs Analysis' },
    { title: 'Quantitative Research' },
    { title: 'Quantitative Reports' },
    { title: 'Statistical Analysis' },
    { title: 'Applications' },
    { title: 'Configuration' },
    { title: 'Debugging' },
    { title: 'Development' },
    { title: 'Design' },
    { title: 'Hardware' },
    { title: 'Information Technology' },
    { title: 'Network Architecture' },
    { title: 'Networking' },
    { title: 'Operating Systems' },
    { title: 'Security' },
    { title: 'Servers' },
    { title: 'Software' },
    { title: 'Storage' },
    { title: 'Technical Support' },
    { title: 'Testing' },
    { title: 'Tools' },
    { title: 'Systems Analysis' },
    { title: 'Troubleshooting' },
    { title: 'Usability' },
    { title: 'Engineering' },
    { title: 'Performance Review' },
    { title: 'Programming' },
    { title: 'Project Planning' },
    { title: 'Quality Control' },
    { title: 'Task Management' },
    { title: 'Blogging' },
    { title: 'Digital Media' },
    { title: 'Social Media Platforms' },
    { title: 'Web Analytics' },
    { title: 'Research' },
    { title: 'Technical Documentation' },
    { title: 'Facebook' },
    { title: 'Facebook' },
  ];

  // for form
  const [form, setForm] = useState({
    bio: '',
    skills: '',
    phone: '',
    timezone: '',
    googlemeet: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    // props.handleSubmit(form)
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // for Link
  const preventDefault = (e) => e.preventDefault();

  // for validation
  const OnboardingSchema = yup.object().shape({
    bio: yup
      .string()
      .required('Bio is required')
      .min(2, MIN_CHARS)
      .max(128, MAX_CHARS),
    skills: yup.string().required('One skill is required'),
    phone: yup.string().required('Phone is required'),
    // phone field should be auto formatted (controlled field)
    timezone: yup.string().required('Timezone is required'),
    googlemeet: yup.string().required('Google meet is required'),
    // google meet link field should start with (google.meet.com/)
  });
  const { register, handleSubmit } = useForm({
    revalidateMode: 'onChange',
    resolver: yupResolver(OnboardingSchema),
  });

  // STUFF I STILL NEED
  // TESTS
  // CSS
  // Should show any errors if input is invalid
  // disable submit button if fields are not valid
  // must be WCAG compliant
  // must be mobile responsive
  // cross browser compatible excluding IE
  const body = (
    // <Paper styles={{ root: styles.paperContainer }}>
    <form
      className={styles.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.modal}>
        <div align="center">
          <h2 className={styles.h2}>Almost there!</h2>
          <h5 className={styles.subtitle}>
            We'll need to confirm a few things about you.
          </h5>
        </div>
        <Typography variant="h4" className={styles.container}>
          {BIO}
        </Typography>
        <TextField
          {...{
            id: 'outlined-multiline-flexible',
            multiline: true,
            rowsMax: 4,
            variant: 'outlined',
            className: styles.textField,
            placeholder: 'Add bio here.',
            name: 'bio',
            type: 'text',
            value: form.bio,
            onChange: { handleChange },
            inputRef: register,
          }}
        />
        <Typography variant="h4" className={styles.container}>
          {SKILLS}
        </Typography>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={topSkills}
          getOptionLabel={(option) => option.title}
          defaultValue={[topSkills[0]]}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              className={styles.textField}
              placeholder="Select Skills"
            />
          )}
        />
        <Typography variant="h4" className={styles.container}>
          {PHONE}
        </Typography>
        <TextField
          {...{
            id: 'outlined-basic',
            placeholder: '718-777-4545',
            variant: 'outlined',
            className: styles.textField,
            name: 'phone',
            type: 'text',
            value: form.phone,
            onChange: { handleChange },
            inputRef: register,
          }}
        />
        <Typography variant="h4" className={styles.container}>
          {TIME_ZONE}
        </Typography>
        <FormControl variant="outlined" className={styles.textField}>
          <InputLabel id="demo-simple-select-outlined-label">
            GMT + 5, New York
          </InputLabel>
          <Select
            placeholder="GMT + 5, New York"
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            // className={styles.textField}
            name="timezone"
            type="text"
            value={form.timezone}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {timeZoneData.map(({ offset, name }) => (
              <MenuItem key={offset} value={offset}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography variant="h4" className={styles.container}>
          {GOOGLE_MEET}
        </Typography>
        <Typography>
          <Link
            href="meet.google.com/oer-yjhx-sia"
            onClick={preventDefault}
            className={styles.textField}
            name="googlemeet"
          >
            meet.google.com/oer-yjhx-sia
          </Link>
        </Typography>
        <Button className={styles.buttonModal}>I'M GOOD TO GO!</Button>
      </div>
    </form>
    // </Paper>
  );

  return (
    <div className={styles}>
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
