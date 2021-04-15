import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './ MentorCard.styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const MentorCard = ({
  firstName,
  lastName,
  title,
  mentorSkills,
  bio,
  initials,
  onTestClick,
}) => {
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
    console.log('BOOKING FOR THIS MENTOR OPENS UP');
  };

  return (
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
