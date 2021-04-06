import React, { useState } from 'react';
import {
  Modal,
  TextField,
  Button,
  useMediaQuery,
  FormControl,
  Link,
  Typography,
} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import useStyles from './MentorOnboardingModal.styles';

const MentorOnboardingModal = () => {
  const isMobile = useMediaQuery('(max-width:1023px)');
  const styles = useStyles({
    isMobile: isMobile,
  });

  const [open, setOpen] = React.useState(false);

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

  // form
  const [form, setForm] = useState({
    bio: '',
    skills: '',
    phone: '',
    timezone: '',
    googlemeet: '',
  });

  const submit = (e) => {
    e.preventDefault();
    // props.handleSubmit(form)
  };
  // console.log(form);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // for Link
  const preventDefault = (event) => event.preventDefault();

  const body = (
    <form
      className={styles.root}
      noValidate
      autoComplete="off"
      onSubmit={submit}
    >
      <div className={styles.modal}>
        <div align="center">
          <h2 className={styles.h2}>Almost there!</h2>
          <h4 className={styles.container}>
            We'll need to confirm a few things about you.
          </h4>
        </div>
        <h4 className={styles.container}>Add a Bio (128 char)</h4>
        <TextField
          id="outlined-multiline-flexible"
          label="Your Bio"
          multiline
          rowsMax={3}
          variant="outlined"
          className={styles.textField}
          placeholder="Narwhal prism snackwave pop-up, wayfarers kinfolk asymmetrical poke. Flexitarian cliche williamsburg drinking vinegar shabby chic slow-carb pug semiotics pop-up. Cliche williamsburg drinking vinegar shabby."
          name="bio"
          type="text"
          value={form.bio}
          onChange={handleChange}
        />
        <h4 className={styles.container}>
          Skills (eg. tech stack, anything you can offer help with.)
        </h4>
        <TextField
          id="outlined-basic"
          label="React,js, Node.js, Ruby on Rails"
          variant="outlined"
          className={styles.textField}
          name="skills"
          type="text"
          value={form.skills}
          onChange={handleChange}
        />
        <h4 className={styles.container}>Phone</h4>
        <TextField
          id="outlined-basic"
          label="718-777-4545"
          variant="outlined"
          className={styles.textField}
          name="phone"
          type="text"
          value={form.phone}
          onChange={handleChange}
        />
        <h4 className={styles.container}>Your Time Zone</h4>
        <FormControl variant="outlined" className={styles.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            GMT + 5, New York
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            className={styles.textField}
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

        <h4 className={styles.container}>Add a google meet:</h4>
        <Typography>
          <Link href="meet.google.com/oer-yjhx-sia" onClick={preventDefault}>
            meet.google.com/oer-yjhx-sia
          </Link>
        </Typography>
        {/* <TextField
          id="outlined-basic"
          label="meet.google.com/oer-yjhx-sia"
          variant="outlined"
          className={styles.textField}
          name="googlemeet"
          type="text"
          value={form.googlemeet}
          onChange={handleChange}
        /> */}
        <Button className={styles.buttonModal}>I'M GOOD TO GO!</Button>
      </div>
    </form>
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
