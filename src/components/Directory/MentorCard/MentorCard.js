import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const MentorCard = () => {
  return (
    <Card className="MentorCard">
      <div className="menterCardHeader">
        <div>Mentorimage</div>
        <div> MentorName</div>
        <button>BOOK ME</button>
      </div>
    </Card>
  );
};

export default MentorCard;
