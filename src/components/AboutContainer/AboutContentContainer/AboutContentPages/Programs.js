import React from 'react';
import { Link, Typography } from '@material-ui/core';
import useStyles from '../AboutContentContainer.styles';

const Programs = () => {
  const cohort = 'Spring 2021';
  const appDeadline = 'January 1st 2021';

  const { title, blue } = useStyles();
  return (
    <>
      <Typography variant="h2" className={title}>
        Upcoming Programs & Events
      </Typography>
      <section>
        <h3>{cohort} Cohort</h3>
        <h4 className={blue}>
          Are you an aspiring software engineer ready to dive into building
          applications in a team environment? Ever wonder what it takes to make
          your code shippable, or just want to get your hands on unit testing in
          DevOps?
        </h4>
        <p>
          We have a 3-month mentorship opportunity for recent grads to gain real
          world experience as junior engineers and junior UX designers.
        </p>
        <p>
          In this role, you will be joining a SCRUM team and will be mentored by
          a Lead Product Designer and Lead Engineer. It’s a great opportunity to
          apply recently acquired skills while making an impact in civic
          technology.
        </p>
      </section>
      <br />
      <section>
        <h3>Mentorship Takeaways:</h3>
        <ul>
          <li>
            Dive into the following tech stack: Mongo DB, Express React.js and
            Node.js.
          </li>
          <li>
            Get a chance to work in an enterprise team, and learn agile product
            development process
          </li>
          <li>
            Gain access to resume reviews and job search support while in the
            program
          </li>
        </ul>
      </section>
      <br />
      <section>
        <h3>Eligibility Requirements: </h3>
        <ul>
          <li>
            is a woman of color who recently graduated from a Software
            Development Immersive/Bootcamp or an equivalent
          </li>
          <li>
            Knowledge with React.js / Redux and basic JavaScript programming
            concepts
          </li>
          <li>
            Time commitment is required at least 10 hours a week and ability to
            attend daily stand ups
          </li>
        </ul>
        <p>
          Tell us why you would be a great fit by sending your resume and
          100-word cover letter to{' '}
          <Link href="mailto:volunteers@femmecubator.com">
            volunteers@femmecubator.com
          </Link>
          . Application is open until {appDeadline}.
        </p>
      </section>
    </>
  );
};

export default Programs;
