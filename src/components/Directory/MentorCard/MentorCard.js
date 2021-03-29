import React from 'react';
import useStyles from './ MentorCard.styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const MentorCard = () => {
  const classes = useStyles();
  const { root, avatar, booking } = classes;

  return (
    <Card className={root} variant="outlined">
      <CardHeader
        avatar={
          <Avatar aria-label="Mentor Avatar" className={avatar}>
            UserINitial
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
        title="MENTOR NAME HERE"
        subheader="MENTOR IN UX/DEV"
      />
      <Divider />
      <CardContent>
        <Typography variant="h6">Mentor Specialties</Typography>
        <Typography variant="body1">
          Lorem ipsum testing lines limited to an awesomely composed lead
          sentence or series of posts. Snappy, judgy, tyrannical. Compassionate
          or narcissistic. It's a placeholder limited to 280 char text to a max
          of 5 lines then get truncated w/ 3 dot ellipses...
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MentorCard;
