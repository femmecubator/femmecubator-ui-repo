import React from 'react';
import useStyles from './ MentorCard.styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const MentorCard = ({ mentorName, jobTitle, mentorSkills, bio, initials }) => {
  const classes = useStyles();
  const { root, avatar, booking, skillList } = classes;

  return (
    <Card className={root} variant="outlined">
      <CardHeader
        avatar={
          <Avatar aria-label="Mentor Avatar" className={avatar}>
            {initials}
          </Avatar>
        }
        action={
          <Button
            aria-label="Booking"
            className={booking}
            variant="outlined"
            color="primary"
          >
            Book Me
          </Button>
        }
        title={mentorName}
        subheader={jobTitle}
      />
      <Divider />
      <CardContent>
        <Typography variant="subtitle2" className={skillList}>
          {mentorSkills}
        </Typography>
        <Typography variant="body2">{bio}</Typography>
      </CardContent>
    </Card>
  );
};

export default MentorCard;
