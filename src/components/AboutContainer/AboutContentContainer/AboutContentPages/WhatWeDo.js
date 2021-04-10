import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from '../AboutContentContainer.styles';

const WhatWeDo = () => {
  const { title } = useStyles();
  return (
    <>
      <Typography variant="h2" className={title}>
        A mentorship community
      </Typography>
      <hr />
      <section>
        <h3>Technology needs more women of color at the table.</h3>
        <p>
          Only 12% of BIPOC women occupy seats within the technology field and
          Femmecubator strives to bridge that gap through our App Development
          mentorship program. We aim to bridge the gender and racial inequities
          in tech – that double bind issue of the low representation of women
          and women of color.
        </p>
        <p>
          One of the key factors that hinders POC and women from even getting in
          the door at tech companies isn’t the lack of education but the lack of
          access to a network and the obvious lack of representation.
        </p>
      </section>
      <br />
      <section>
        <h3>The volunteer experience</h3>
        <p>
          We are a volunteer-led community that connects aspiring Software
          Developers and UX Designers to social good projects through
          mentorship. Volunteers and mentees accepted into the program gain
          experience building digital products in an agile-driven environment.
        </p>
      </section>
      <br />
      <section>
        <h3>Spring, and Fall AppDev Program</h3>
        <p>
          In 2021, Femmecubator will open its doors to 10 women of color who are
          aspiring in UX Designers and Web Developers. In this 3-month program,
          they will be immersed in the product development process while
          building social good projects and will have access to mentors in the
          field.
        </p>
      </section>
    </>
  );
};

export default WhatWeDo;
