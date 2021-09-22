import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  TextField,
  useMediaQuery,
  Paper,
  Button,
  CircularProgress,
} from '@material-ui/core';
import FocusTrapOverlay from '../FocusTrapOverlay/FocusTrapOverlay';
import Autocomplete from '@material-ui/lab/Autocomplete';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useStyles from './MentorOnboardingModal.styles';
import timeZoneData from './timezoneArray';
import topSkills from './topSkills';
import { isEmpty } from 'lodash';
import Backdrop from '@material-ui/core/Backdrop';
import request from 'utils/axiosConfig';
import SnackBar from 'components/SnackBar';
import { API_PATH } from 'utils/constants';
import jwt_decode from 'jwt-decode';
import { getTokenCookie } from 'utils/cookies';
import Cookies from 'universal-cookie';

const BIO = 'Bio';
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

const MentorOnboardingModal = ({
  opened,
  mockOnSubmit,
  withouHeading,
  setOpenModal,
  showInModal,
  setEditFields,
  profileData,
}) => {
  const isMobile = useMediaQuery('(max-width:1024px)');
  const {
    modal,
    labelText,
    modalSubmit,
    subheading,
    heading,
    inputField,
    formContainer,
    backdrop,
  } = useStyles({
    isMobile: isMobile,
  });

  const cookies = new Cookies();

  if (cookies.get('TOKEN')) {
    const { hasOnboarded } = jwt_decode(getTokenCookie());
  }

  var defaultSkillsArray = [];
  var defaultTimeZoneIndex;
  if (profileData) {
    const { skills, timezone } = profileData;
    var indexArraySkills = [];
    skills.map(data => {
      topSkills.map((data2, index) => {
        if (data2.title === data) {
          indexArraySkills.push(index);
        }
      });
    });
    timeZoneData.map((data, index) => {
      if (data.name === timezone.name) {
        defaultTimeZoneIndex = index;
      }
    });
    defaultSkillsArray = indexArraySkills.map(data => topSkills[data]);
  }

  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [responseMessageType, setResponseMessageType] = useState('');
  const [openBackdrop, setOpenBackdropt] = useState(false);
  const [timeZoneObject, setTimeZoneObject] = useState(
    profileData ? profileData.timezone : null
  );
  const [skillsArray, setSkillsArray] = useState(
    profileData ? profileData.skills : []
  );

  const onSubmit = async data => {
    setOpenBackdropt(true);
    data.timezone = timeZoneObject;
    data.skills = skillsArray;
    var body;
    if (hasOnboarded) {
      body = { ...data };
    } else {
      body = { ...data, hasOnboarded: true };
    }
    try {
      const response = await request.post(API_PATH.UPDATE_MENTOR_PROFILE, body);
      if (response.data.message === 'Success') {
        setOpenBackdropt(false);
        setOpenSnackBar(true);
        setResponseMessage('Account info updated successfully');
        setResponseMessageType('success');
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
      setOpenBackdropt(false);
      setOpenSnackBar(true);
      setResponseMessage(err.data.message);
      setResponseMessageType('error');
    }
  };

  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(OnboardingSchema),
  });
  useEffect(() => {
    if (profileData) {
      const { bio, googlemeet, phone, skills } = profileData;
      setValue('bio', bio);
      setValue('googlemeet', googlemeet);
      setValue('phone', phone);
      setValue('skills', skills, { shouldValidate: true });
    }
  }, [setValue, profileData, timeZoneObject]);

  const formContent = (
    <>
      <Backdrop className={backdrop} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <SnackBar
        openSnackBar={openSnackBar}
        setOpenSnackBar={setOpenSnackBar}
        responseMessage={responseMessage}
        responseMessageType={responseMessageType}
      />
      <form
        className={formContainer}
        onSubmit={handleSubmit(mockOnSubmit || onSubmit)}
        style={!showInModal ? { padding: 0 } : null}
      >
        {withouHeading ? null : (
          <div align="center">
            <h2 id="mentorOnboardingTitle" className={heading}>
              Almost there!
            </h2>
            <h3 id="mentorOnboardingDesc" className={subheading}>
              We'll need to confirm a few things about you.
            </h3>
          </div>
        )}

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
              setSkillsArray(newValue.map(option => option.title));
              setValue(
                'skills',
                newValue.map(option => option.title),
                { shouldValidate: true }
              );
            },
            defaultValue: defaultSkillsArray,
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
              const value = newValue ? newValue : null;
              setTimeZoneObject(value);
              setValue('timezone', value, { shouldValidate: true });
            },
            defaultValue: timeZoneData[defaultTimeZoneIndex],
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
    </>
  );

  return showInModal ? (
    <>
      <SnackBar
        openSnackBar={openSnackBar}
        setOpenSnackBar={setOpenSnackBar}
        responseMessage={responseMessage}
        responseMessageType={responseMessageType}
      />
      <Backdrop className={backdrop} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <FocusTrapOverlay open={opened}>
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
    </>
  ) : (
    formContent
  );
};

export default MentorOnboardingModal;
