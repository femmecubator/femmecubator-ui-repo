import React from 'react';
import {
  createMuiTheme,
  //makeStyles,
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
//import mentorHome from '.../assets/mentorhome.jpg';
import useStyles from './MentorGetInvolved.styles';
import { Typography, Button } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel';
import SchoolIcon from '@material-ui/icons/School';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Divider from '@material-ui/core/Divider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Footer from 'components/Footer/Footer';
import { Link } from 'react-router-dom';

const BlueFilledButton = withStyles({
  root: {
    display: 'flex',
    background: '#026FE4',
    borderRadius: '4px',
    height: '45px',
    padding: '10px 21px',
    color: 'white',
    //margin: '0px',
    '&:hover': {
      background: '#550CCC',
      border: 'none',
    },
    /* buttonOne: {
      marginLeft: '7px',
    }, */
  },

  label: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 600,
    size: '18px',
  },
})(Button);

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const communityQuotes = [
  {
    id: 1,
    img: '../assets/communityImg1.png',
    text: 'I definitely credit my mentors and teammates at Femmecubator for being a significant part in helping me land an engineering role at a company I absolutely love! Being part of the dev team not only gave me much needed technical experience in a real world setting, but also introduced me to incredible people who have grown to be my lifelong friends.',
    name: 'Anh - Tech4Good Team Member',
  },
  {
    id: 2,
    img: './assets/communityImg2.png',
    text: 'It’s been incredibly rewarding to share my knowledge and experiences with a community of women while gaining exposure to diverse perspectives and growing my leadership capacity.',
    name: 'Chyna - Mentor',
  },
  {
    id: 3,
    img: './assets/communityImg3.png',
    text: 'It’s been incredibly rewarding to share my knowledge and experiences with a community of women while gaining exposure to diverse perspectives and growing my leadership capacity.',
    name: 'Chyna - Mentee',
  },
];

export default function MentorGetInvolved() {
  //const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  const {
    root,
    headingContainer,
    headingComponent,
    headingComponentParagraph,
    titleWhite,
    waysMentorContainer,
    containerTitle,
    titlePurple,
    mentorTypeContainer,
    greenCircle,
    greenCircleLg,
    waysMentorContainerSVG,
    waysMentorComponentTitle,
    mentorComponentWithSVG,
    cohortMentor,
    flexibleMentor,
    waysMentorContainerParagraph,
    verticalDivider,
    howToStartContainer,
    howToStartNestedContainer,
    howToStartNestedContainer2,
    howToStartContainerTitle,
    howToStartComponent,
    howToStartNumbers,
    howToStartContainerParagraph,
    communityQuotesContainer,
    communityQuotesContainerTitle,
    communityQuotesNestedContainer,
    communityQuotesComponent,
    communityQuotesImage,
    communityQuotesText,
    communityQuotesName,
    faqAccordionContainer,
    faqAccordionContainerTitle,
    faqAccordionComponent,
    faqAccordianParagraph,
    faqAccordianParagraphTwo,
    buttonOne,
    linkStyle,
  } = classes;

  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <main className={root}>
        {/* <> */}
        <Grid container>
          <Grid
            {...{
              container: true,
              className: headingContainer,
              item: true,
              xs: 12,
            }}
          >
            <div className={headingComponent}>
              <Typography
                {...{
                  variant: 'h2',
                  className: titleWhite,
                }}
              >
                Become a mentor
              </Typography>
              <Typography
                {...{
                  variant: 'body1',
                  className: headingComponentParagraph,
                  paragraph: true,
                }}
              >
                Want to make a difference in the next generation of designers
                and developers? We’re actively seeking BIPOC women experienced
                in UX or Software Development to mentor other BIPOC women
                looking to break into tech.
              </Typography>
              <Link
                to="/register"
                className={linkStyle}
                style={{ marginLeft: '9%' }}
              >
                <BlueFilledButton variant="contained" className="buttonOne">
                  SIGN UP NOW
                </BlueFilledButton>
              </Link>
            </div>
          </Grid>
          <Grid
            {...{
              className: waysMentorContainer,
              container: true,
              // spacing: 2,
              //sm: 12,
            }}
          >
            <Grid {...{ className: containerTitle, item: true }}>
              <Typography
                {...{
                  variant: 'h2',
                  className: titlePurple,
                }}
              >
                Ways you can mentor
              </Typography>
            </Grid>

            <Grid
              {...{
                item: true,
                className: mentorTypeContainer,
              }}
            >
              <Grid
                {...{ item: true, sm: 3, className: mentorComponentWithSVG }}
              >
                <Grid className={greenCircle} item>
                  <SupervisorAccountIcon
                    item="true"
                    fontSize="large"
                    className={waysMentorContainerSVG}
                  />
                </Grid>

                <Grid {...{ item: true, sm: 12, className: cohortMentor }}>
                  <Typography
                    {...{
                      variant: 'h2',
                      className: waysMentorComponentTitle,
                      item: true,
                    }}
                  >
                    Cohort Mentoring
                  </Typography>
                  <Typography
                    {...{
                      variant: 'body1',
                      className: waysMentorContainerParagraph,
                      item: true,
                    }}
                  >
                    Volunteer to become a mentor for our 8-week mentorship
                    program offered to aspiring UX designers and software
                    developers twice a year.
                  </Typography>
                </Grid>
              </Grid>
              <Divider
                {...{ item: true, sm: 3, className: verticalDivider }}
                // classes={verticalDivider}
                orientation="vertical"
                variant="middle"
                // style={{ height: '100%', marginRight: '7%', marginLeft: '7%' }}
                // item
                //flexItem
              />

              <Grid
                {...{ item: true, sm: 3, className: mentorComponentWithSVG }}
              >
                <Grid className={greenCircle} item>
                  <SchoolIcon
                    fontSize="large"
                    className={waysMentorContainerSVG}
                  />
                </Grid>
                <Grid {...{ item: true, sm: 12, className: flexibleMentor }}>
                  <Typography
                    {...{
                      variant: 'h2',
                      className: waysMentorComponentTitle,
                      item: true,
                    }}
                  >
                    Flexible Mentoring
                  </Typography>
                  <Typography
                    {...{
                      variant: 'body1',
                      className: waysMentorContainerParagraph,
                      item: true,
                    }}
                  >
                    Set your calendar availability so mentees can easily book
                    1:1 time with you through our dedicated platform.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            {...{
              className: howToStartContainer,
              container: true,
              // spacing: 4,
              background: '#026FE4',
              //direction: 'column',
            }}
          >
            <Grid
              {...{ className: howToStartContainerTitle, item: true, sm: 12 }}
            >
              <Typography {...{ variant: 'h2', className: titlePurple }}>
                How to start
              </Typography>
            </Grid>

            <Grid className={howToStartNestedContainer} item sm={12}>
              <Grid className={howToStartNestedContainer2} item sm={4}>
                <Grid
                  {...{ className: howToStartComponent, item: true, sm: 6 }}
                >
                  <div
                    className={greenCircleLg}
                    style={{
                      color: '#400CCC',
                      fontSize: '28px',
                      fontWeight: 700,
                      marginBottom: '20px',
                    }}
                    item="true"
                  >
                    1
                  </div>
                  <Typography
                    {...{ variant: 'h2', className: titlePurple, item: true }}
                  >
                    Sign Up
                  </Typography>
                  <Typography
                    {...{
                      variant: 'body1',
                      className: howToStartContainerParagraph,
                      item: true,
                    }}
                  >
                    Make an account on Femmecubator
                  </Typography>
                </Grid>

                <Grid
                  {...{ className: howToStartComponent, item: true, sm: 6 }}
                >
                  <div
                    className={greenCircleLg}
                    style={{
                      color: '#400CCC',
                      fontSize: '28px',
                      fontWeight: 700,
                      marginBottom: '20px',
                    }}
                    item="true"
                  >
                    2
                  </div>
                  <Typography
                    {...{ variant: 'h2', className: titlePurple, item: true }}
                  >
                    Apply
                  </Typography>
                  <Typography
                    {...{
                      variant: 'body1',
                      className: howToStartContainerParagraph,
                      item: true,
                    }}
                  >
                    Complete and submit the mentor application form
                  </Typography>
                </Grid>
              </Grid>

              <Grid className={howToStartNestedContainer2} item sm={4}>
                <Grid
                  {...{ className: howToStartComponent, item: true, sm: 6 }}
                >
                  <div
                    className={greenCircleLg}
                    style={{
                      color: '#400CCC',
                      fontSize: '28px',
                      fontWeight: 700,
                      marginBottom: '20px',
                    }}
                    item="true"
                  >
                    3
                  </div>
                  <Typography
                    {...{ variant: 'h2', className: titlePurple, item: true }}
                  >
                    Get Approved
                  </Typography>
                  <Typography
                    {...{
                      variant: 'body1',
                      className: howToStartContainerParagraph,
                      item: true,
                    }}
                  >
                    Recieve an email confirmation within a week
                  </Typography>
                </Grid>

                <Grid
                  {...{ className: howToStartComponent, item: true, sm: 6 }}
                >
                  <div
                    className={greenCircleLg}
                    style={{
                      color: '#400CCC',
                      fontSize: '28px',
                      fontWeight: 700,
                      marginBottom: '20px',
                    }}
                    item="true"
                  >
                    4
                  </div>
                  <Typography
                    {...{ variant: 'h2', className: titlePurple, item: true }}
                  >
                    Start Mentoring
                  </Typography>
                  <Typography
                    {...{
                      variant: 'body1',
                      className: howToStartContainerParagraph,
                      item: true,
                    }}
                  >
                    Complete your profile and start making an impact
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid {...{ item: true, sm: 12 }}>
              <Link
                to="/register"
                className={linkStyle}
                style={{ marginLeft: '9%' }}
              >
                <BlueFilledButton
                  {...{
                    variant: 'contained',
                    item: true,
                    style: {
                      margin: 'auto',
                    },
                  }}
                >
                  SIGN UP NOW
                </BlueFilledButton>
              </Link>
            </Grid>
          </Grid>

          <Grid
            {...{
              className: communityQuotesContainer,
              container: true,
              // spacing: 3,
              sm: 12,
            }}
          >
            <Grid
              {...{
                className: communityQuotesContainerTitle,
                item: true,
                sm: 12,
              }}
            >
              <Typography
                {...{
                  variant: 'h2',
                  className: titlePurple,
                  //item: true,
                  // sm: 12,
                }}
              >
                What the Femmecubator community is saying
              </Typography>
            </Grid>

            <Grid className={communityQuotesNestedContainer} item sm={8}>
              {matches ? (
                <Carousel
                  navButtonsAlwaysInvisible={true}
                  className="myCarousel"
                >
                  {communityQuotes.map(
                    ({ quote: id, img, text, name }, idx) => (
                      <div key={`${id} - ${idx}`}>
                        <Grid className={communityQuotesComponent} item sm={9}>
                          <img
                            src={img}
                            aria-label={name}
                            className={communityQuotesImage}
                            item
                          />
                          <Typography
                            {...{ item: true, className: communityQuotesText }}
                          >
                            {text}
                          </Typography>
                          <Typography
                            {...{ item: true, className: communityQuotesName }}
                          >
                            {name}
                          </Typography>
                        </Grid>
                      </div>
                    )
                  )}
                </Carousel>
              ) : (
                communityQuotes.map(({ quote: id, img, text, name }, idx) => (
                  <div key={`${id} - ${idx}`}>
                    <Grid className={communityQuotesComponent} item sm={9}>
                      <img
                        src={img}
                        aria-label={name}
                        className={communityQuotesImage}
                        item
                      />
                      <Typography
                        {...{ item: true, className: communityQuotesText }}
                      >
                        {text}
                      </Typography>
                      <Typography
                        {...{ item: true, className: communityQuotesName }}
                      >
                        {name}
                      </Typography>
                    </Grid>
                  </div>
                ))
              )}
            </Grid>
          </Grid>

          <Grid
            {...{
              className: faqAccordionContainer,
              container: true,
              sm: 12,
            }}
          >
            <Grid
              {...{
                className: faqAccordionContainerTitle,
                item: true /* , sm: 12 */,
              }}
            >
              <Typography {...{ variant: 'h2', className: titlePurple }}>
                Frequently Asked Questions
              </Typography>
            </Grid>
            <Accordion
              {...{ className: faqAccordionComponent, item: true, sm: 12 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                disableGutters
                elevation={0}
              >
                <Typography
                  {...{ className: faqAccordianParagraph, item: true }}
                >
                  What’s the expected time commitment for a mentor?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  {...{ className: faqAccordianParagraphTwo, item: true }}
                >
                  We recommend an average time commitment of 2-4 hours monthly.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              {...{ className: faqAccordionComponent, item: true, sm: 12 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography
                  {...{ className: faqAccordianParagraph, item: true }}
                >
                  What is the difference between cohort and flexible mentoring?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  {...{ className: faqAccordianParagraphTwo, item: true }}
                >
                  Cohort mentorship applies to mentors interested in getting
                  involved in our Spring or Fall Excel Labs program. In this
                  track, you will be needed to provide critique or lead design
                  talks for a minimum of 2 hours on a fixed schedule/cadence.
                  <br />
                  <br />
                  Flexible mentorship is an on-demand track where mentors have
                  the flexibility to provide one-off consultation for
                  designers/developers outside of the Excel Labs program. Our
                  mentees will book 1:1 time with you through our app through
                  our timeslots feature.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              {...{ className: faqAccordionComponent, item: true, sm: 12 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography
                  {...{ className: faqAccordianParagraph, item: true }}
                >
                  How do I know if I’m eligible to become a mentor?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  {...{ className: faqAccordianParagraphTwo, item: true }}
                >
                  We highly recommend midlevel designers and developers to join
                  as mentors. BIPOC mentors are a plus. We find that most
                  mentees are looking to pair up with mentors who are of similar
                  backgrounds.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              {...{ className: faqAccordionComponent, item: true, sm: 12 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4-content"
                id="panel4-header"
              >
                <Typography
                  {...{ className: faqAccordianParagraph, item: true }}
                >
                  Who will I be mentoring?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  {...{ className: faqAccordianParagraphTwo, item: true }}
                >
                  Femmecubator’s mission is to support BIPOC women breaking into
                  the field of UX Design and Web Development. In a nutshell,
                  members often need support in different stages of their career
                  switch:
                  <br />
                  <br />
                  Just starting - seeking out best resources or next step
                  options to further strengthen their skills
                  <br />
                  <br />
                  Already took bootcamp/classes - looking for career path
                  recommendations or informational interview
                  <br />
                  <br />
                  Portfolio Review - they are looking to get feedback on their
                  work, their project or design critique their portfolio
                  <br />
                  <br />
                  Pair programming - developer mentees often get stuck and need
                  support on refactoring or debugging code
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* <Accordion
              {...{ className: faqAccordionComponent, item: true, sm: 12 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5-content"
                id="panel5-header"
              >
                <Typography
                  {...{ className: faqAccordianParagraph, item: true }}
                >
                  Why should I join Femmecubator?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  {...{ className: faqAccordianParagraphTwo, item: true }}
                >
                  TBD
                </Typography>
              </AccordionDetails>
            </Accordion> */}
          </Grid>
          <Footer />
        </Grid>
        {/* </> */}
      </main>
    </ThemeProvider>
  );
}
