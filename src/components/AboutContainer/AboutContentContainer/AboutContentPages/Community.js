import React from 'react';
import { Link, makeStyles, Typography } from '@material-ui/core';
import useStyles from '../AboutContentContainer.styles';
import { COHORT, APP_DEADLINE } from 'utils/constants';

const Community = () => {
  const { title, blue, listStyle } = useStyles();
  return (
    <>
      <Typography variant="h2" className={title}>
        Community Programs and Events
      </Typography>
      <section>
        <h3>Mentor Match Event</h3>
        <p>
          Mentor Match is a one-on-one mentor support to BIPOC women new to UX
          careers. We've invited mentors from Microsoft, Boeing, Optum and many
          more!
        </p>
        <p>
          As a mentee, you will be matched with a committed, experienced, and
          successful mentor in the field who will guide, assist, and support you
          as you build your future.
        </p>
        <p>
          Get paired with a mentor who will be ready to help you create a clear
          career path, grow your network, make vital connections in the
          industry, expose you to hands-on experiences in the field, and help
          you create the career you envision for yourself.
        </p>
      </section>
      <br />
      <section>
        <h3>LiT (Ladies in Tech) Talk</h3>
        <p>
          Femmecubator hosts monthly workshops recommended for BIPOC women in
          tech who’s looking for a platform to share topics they are passionate
          about! Junior-level speakers encouraged!
        </p>
        <p>
          LiT Talk events aim to lower the barrier to entry and easily onboard
          self-taught/early career BIPOC designers and developers in our
          community, while gaining collaborative tech experience.
        </p>
        <p>
          LiT (Ladies in Tech) Talk, is a tech-oriented event in workshop or
          talk format, developed by Femmecubator alums Ebony Johnson, Priyanka
          Thomas and Linh Protzel, through a pilot Women Excel Labs program in
          2021.
        </p>
      </section>
      <br />
      <section>
        <h3>Women Excel Labs Program </h3>
        <p>
          WE Labs is a 3-month opportunity for recent grads to gain real world
          experience as junior engineers and junior UX designers. In this role,
          you will be joining a SCRUM team and will be mentored by a Lead
          Product Designer and Lead Engineer. It’s a paid opportunity (stipend
          provided) to apply recently acquired skills while making an impact in
          an apprenticeship format.
        </p>
      </section>
      <br />
      <section>
        <h3>Eligibility: </h3>
        <ul className={listStyle}>
          <li>
            - &nbsp; is a woman of color who recently graduated from a Software
            Development/UX Design Immersive or equivalent experience
          </li>
          <li>
            - &nbsp; for devs: Knowledge with React.js / Redux and basic
            JavaScript programming concepts
          </li>
          <li>
            - &nbsp; for designers: existing case study on a feature/product
            redesign using HCI methods
          </li>
          <li>
            - &nbsp; time commitment: 10 hours a week and ability to attend 3x
            weekly stand ups
          </li>
        </ul>
      </section>
    </>
  );
};

export default Community;
