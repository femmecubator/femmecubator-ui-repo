import React from 'react';
import useStyles from './ MentorCard.styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';

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
        <div>MORE INFOR ON MENTOR HERE</div>
      </CardContent>
    </Card>
  );
};

export default MentorCard;
