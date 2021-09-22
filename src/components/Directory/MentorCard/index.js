import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
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

const MentorCard = ({ userInfo, skills, bio, onTestClick }) => {
  const [openMeet, setOpenMeet] = React.useState(false);
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
  } = classes;

  const handleClick = e => {
    e.preventDefault();
    if (onTestClick) return onTestClick();
    setOpenMeet(true);
    //TODO: Booking for this mentor opens up
  };

  return (
    <>
      <BookDialog openMeet={openMeet} setOpenMeet={setOpenMeet} />
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
                onClick: handleClick,
                role: 'button',
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
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  mentorSkills: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
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
}));
