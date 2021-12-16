import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';
import { font } from '../utils';
import {
  Card,
  CardHeader,
  Divider,
  Avatar,
  Button,
  CardContent,
  Typography,
  useMediaQuery,
} from '@material-ui/core/';
import BookDialog from '../BookDialog';
import request from 'utils/axiosConfig';
import { API_PATH } from 'utils/constants';

const MentorCard = ({
  userInfo,
  skills,
  bio,
  onTestClick,
  timeSlot,
  mentor_id,
  timezone,
}) => {
  const [openMeet, setOpenMeet] = useState(false);
  const [slotsData, setSlotsData] = useState([]);
  const [errorResponse, setErrorResponse] = useState(false);
  const [openBackdrop, setOpenBackdropt] = useState(false);
  const [mentorInfo, setMentorInfo] = useState({
    timeZone: timezone.name,
    mentorEmail: userInfo[0].email,
    mentortName: `${userInfo[0].firstName} ${userInfo[0].lastName}`,
    mentorTitle: userInfo[0].title,
  });
  const [goals, setGoals] = useState('');
  const isMobileDevice = useMediaQuery('(max-width:820px)');
  const [days, setDays] = useState(isMobileDevice ? 2 : 4);
  const isMobile = useMediaQuery('(max-width:767px)');
  const classes = useStyles({ isMobile });
  const {
    root,
    avatar,
    booking,
    skillList,
    jobField,
    mentorNameField,
    bioSection,
    backdrop,
  } = classes;

  const handleClick = (mentor_id, slotDates) => {
    var finalData = [];
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    Date.prototype.addDays = function (days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };
    function getDates(startDate, stopDate) {
      var dateArray = new Array();
      var currentDate = startDate;
      while (currentDate <= stopDate) {
        dateArray.push(currentDate);
        currentDate = currentDate.addDays(1);
      }
      return dateArray;
    }

    var currentCursor = isMobileDevice ? 2 : 4;

    var dateArray = getDates(
      new Date().addDays(slotDates - currentCursor),
      new Date().addDays(slotDates)
    );

    dateArray.map(data => {
      finalData.push({
        date: data.toISOString(),
        weekDay: weekDays[data.getDay()],
      });
    });

    var body = { timeslot: finalData, mentor_id: mentor_id };

    async function fetchSlotsData() {
      setOpenBackdropt(true);
      try {
        const { data } = await request.post(API_PATH.GET_TIME_SLOTS, body);
        if (data.message === 'Success') {
          setOpenBackdropt(false);
          setOpenMeet(true);
          var meetSlots = data.data;
          setSlotsData(meetSlots);
        }
      } catch (err) {
        setErrorResponse(true);
        setOpenBackdropt(false);
      }
    }
    fetchSlotsData();

    if (onTestClick) return onTestClick();
  };

  if (errorResponse) throw Error('BAD API REQUEST');
  return (
    <>
      <Backdrop className={backdrop} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {timeSlot && timeSlot.length > 0 ? (
        slotsData.length > 0 ? (
          <BookDialog
            openMeet={openMeet}
            setOpenMeet={setOpenMeet}
            timeSlot={timeSlot}
            slotsData={slotsData}
            setDays={setDays}
            days={days}
            handleClick={handleClick}
            mentor_id={mentor_id}
            mentorInfo={mentorInfo}
            setMentorInfo={setMentorInfo}
            goals={goals}
            setGoals={setGoals}
          />
        ) : null
      ) : null}
      <Card className={root}>
        <CardHeader
          avatar={
            <Avatar aria-label="Mentor Avatar" className={avatar}>
              {userInfo[0].firstName.charAt(0)}
              {userInfo[0].lastName.charAt(0)}
            </Avatar>
          }
          action={
            <Button
              {...{
                'aria-label': 'Booking',
                className: booking,
                variant: 'outlined',
                role: 'button',
              }}
              onClick={() => {
                handleClick(mentor_id, isMobileDevice ? 2 : 4);
                setDays(isMobileDevice ? 2 : 4);
              }}
            >
              BOOK ME
            </Button>
          }
          title={
            <Typography
              {...{
                variant: 'body1',
                className: mentorNameField,
                'data-testid': 'mentorNameField',
              }}
            >
              {userInfo[0].firstName} {userInfo[0].lastName}
            </Typography>
          }
          subheader={
            <Typography
              {...{
                variant: 'caption',
                className: jobField,
                'data-testid': 'jobTitleField',
              }}
            >
              {userInfo[0].title}
            </Typography>
          }
        />
        {isMobile ? null : <Divider light={false} />}
        <CardContent>
          <Typography
            {...{
              variant: 'body2',
              className: skillList,
              'data-testid': 'skillList',
              gutterBottom: true,
            }}
          >
            {skills.join()}
          </Typography>
          <Typography
            {...{
              variant: 'caption',
              className: bioSection,
              'data-testid': 'bioSection',
            }}
          >
            {bio}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
MentorCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  title: PropTypes.string,
  mentorSkills: PropTypes.string,
  bio: PropTypes.string,
  initials: PropTypes.string,
};

export default MentorCard;

const avatarColors = [
  '#FF7452',
  '#FFAB00',
  '#D4EE9C',
  '#00C7E6',
  '#719AF5',
  '#CABEE9',
];

const useStyles = makeStyles(() => ({
  root: {
    width: '413px',
    variant: ({ isMobile }) => (isMobile ? 'none' : 'outlined'),
    marginBottom: '1rem',
    maxHeight: '258px',
  },
  avatar: {
    ...font,
    fontSize: '14px',
    backgroundColor: () => {
      return avatarColors[Math.floor(Math.random() * avatarColors.length)];
    },
    fontWeight: '600',
    color: 'black',
  },
  booking: {
    ...font,
    fontWeight: '600',
    maxHeight: '30px',
    marginTop: '10%',
    borderColor: '#026FE4',
    color: '#026FE4',
  },
  jobField: {
    ...font,
    color: '#026FE4',
    fontWeight: '700 !important',
  },
  mentorNameField: {
    ...font,
    fontWeight: '600 !important',
  },
  skillList: {
    ...font,
    fontWeight: '700',
  },
  bioSection: {
    ...font,
    fontWeight: '400',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkitLineClamp': 5,
    '-webkitBoxOrient': 'vertical',
  },
  backdrop: {
    zIndex: 999999,
    color: '#fff',
  },
}));
