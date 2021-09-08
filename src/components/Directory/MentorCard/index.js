import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './MentorCard.styles';
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

const MentorCard = ({
  firstName,
  lastName,
  title,
  mentorSkills,
  bio,
  initials,
  onTestClick,
}) => {
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
              {initials}
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
              {firstName} {lastName}
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
              {title}
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
            {mentorSkills}
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
