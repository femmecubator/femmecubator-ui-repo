import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';
import TimeSlotModal from './TimeslotModal/TimeSlotModal';

import useStyles from './TimeSlots.styles';

const TimeSlots = () => {
  const { root, slotButton, h3Heading, content, fromNowContent } = useStyles();

  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Card className={root} variant="outlined">
      <CardHeader
        className={h3Heading}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Kim's Office Hours"
      />
      <Divider variant="middle" />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={content}
        >
          Mon, 5:00-6:00 pm Wed, 5:00-6:00 pm Fri, 5:00-6:00 pm
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={fromNowContent}
        >
          From now until 05/30/2021
        </Typography>
      </CardContent>
      <CardHeader
        className={h3Heading}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Weekend Mtgs"
      />
      <Divider variant="middle" />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={content}
        >
          Sat, 4:00pm
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={fromNowContent}
        >
          From now until 05/30/2021
        </Typography>
      </CardContent>
      <button onClick={handleOpen} className={slotButton}>
        + Add Another Slot
      </button>
      {openModal ? <TimeSlotModal handleClose={handleClose} /> : null}
    </Card>
  );
};

export default TimeSlots;
