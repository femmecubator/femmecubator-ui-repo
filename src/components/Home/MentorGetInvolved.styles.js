import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  /* root: {
    flexGrow: 1,
  }, */
  headingContainer: {
    height: '400px',
    backgroundImage: `url('./assets/mentorhome.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '0% 30%',
    boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.5)',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 799px)': {
      justifyContent: 'center',
    },
  },
  headingComponent: {
    flexBasis: '432px',
    flexShrink: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '177px',
    '@media (max-width: 799px)': {
      flexBasis: '80%',
      marginLeft: '0px',
      alignItems: 'center',
    },
  },
  headingComponentParagraph: {
    textAlign: 'left',
    width: '90%',
    maxWidth: '350px',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    color: 'white',
    marginBottom: '40px',
    marginLeft: '9%',
    //display: 'flex',
    //flexWrap: 'wrap',
    '@media (max-width: 799px)': {
      textAlign: 'center',
    },
  },
  titleWhite: {
    textAlign: 'left',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    fontSize: '28px',
    color: 'white',
    marginBottom: '10px',
    display: 'flex',
    marginLeft: '9%',
    '@media (max-width: 799px)': {
      textAlign: 'center',
    },
  },
  /* buttonOne: {
    marginLeft: '7%',
  }, */
  titlePurple: {
    textAlign: 'center',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    fontSize: '25px',
    color: '#400CCC',
    marginBottom: '30px',
    //display: 'flex',
    alignItems: 'center',
    '@media (max-width: 799px)': {
      fontSize: 21,
      marginBottom: '15px',
      textAlign: 'center',
    },
  },
  greenCircle: {
    width: '60px',
    height: '60px',
    minWidth: '60px',
    borderRadius: '50%',
    backgroundColor: '#ABF5D1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '29px',
    '@media (max-width: 799px)': {
      marginBottom: '27px',
      marginRight: '0px',
    },
  },
  greenCircleLg: {
    width: '90px',
    height: '90px',
    minWidth: '90px',
    borderRadius: '50%',
    backgroundColor: '#ABF5D1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    '@media (max-width: 799px)': {
      marginBottom: '27px',
    },
  },
  waysMentorContainer: {
    //height: '330px',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingTop: '45px',
    paddingBottom: '100px',
    flexDirection: 'column',
    //alignItems: 'center',
    /* '@media (max-width: 799px)': {
      paddingTop: '20px',
      alignItems: 'center',
      //height: '700px',
      //flexWrap: 'wrap',
      //flexDirection: 'column',
    }, */
  },
  /* containerTitle: {
    //marginBottom: '20px',
    //alignItems: 'center',
    //display: 'flex',
    //flexDirection: 'column',
    '@media (max-width: 799px)': {
      marginBottom: '15px',
      textAlign: 'center',
    },
  }, */
  waysMentorComponentTitle: {
    textAlign: 'left',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    fontSize: '28px',
    color: '#400CCC',
    marginBottom: '20px',
    //alignItems: 'center',
    '@media (max-width: 799px)': {
      fontSize: 24,
    },
  },
  /* waysMentorComponent: {
    //maxWidth: '360px',
    //minWidth: '200px',
    //display: 'flex',
    //flexDirection: 'row',
    alignItems: 'flex-start',
    /* '@media (max-width: 799px)': {
      alignItems: 'center',
      width: '300px',
    },
  }, */
  mentorTypeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    //padding: '20px',
    '@media (max-width: 799px)': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: 40,
    },
  },
  mentorComponentWithSVG: {
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 799px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  cohortMentor: {
    //marginRight: '7%',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 799px)': {
      alignItems: 'center',
      padding: '0px 20px',
      maxWidth: 350,
    },
  },
  flexibleMentor: {
    //marginLeft: '7%',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 799px)': {
      alignItems: 'center',
      padding: '0px 20px',
      maxWidth: 350,
    },
  },
  waysMentorContainerParagraph: {
    textAlign: 'left',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    color: '#000000',
    //width: '27%',
    //marginBottom: '40px',
    //marginTop: '40px',
    '@media (max-width: 799px)': {
      textAlign: 'center',
      // marginBottom: '0px',
    },
  },
  waysMentorContainerSVG: {
    color: '#400CCC',
    //display: 'flex',
    //alignItems: 'flex-end',
  },
  verticalDivider: {
    height: '100%',
    marginRight: '7%',
    marginLeft: '7%',
    '@media (max-width: 799px)': {
      display: 'none',
    },
  },
  howToStartContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '45px',
    paddingBottom: '100px',
    flexDirection: 'row',
    background: '#F2F7FF',
    '@media (max-width: 799px)': {
      // paddingTop: '20px',
      // alignItems: 'center',
      // height: '700px',
      // flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  howToStartContainerTitle: {
    //marginTop: '40px',
  },
  howToStartNestedContainer: {
    //maxWidth: '360px',
    //minWidth: '200px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    // gap: 20,
    '@media (max-width: 799px)': {
      flexDirection: 'column',
    },
  },
  howToStartNestedContainer2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    gap: 30,
    '@media (max-width: 799px)': {
      // flexDirection: 'column',
    },
  },
  howToStartComponent: {
    display: 'flex',
    flexDirection: 'column',
  },
  howToStartNumbers: {
    color: '#400CCC',
    fontSize: '20px',
    fontWeight: 500,
  },
  howToStartContainerParagraph: {
    textAlign: 'center',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    color: '#000000',
    marginBottom: '40px',
    maxWidth: 300,
    /* '@media (max-width: 799px)': {
      textAlign: 'center',
      marginBottom: '0px',
    }, */
  },
  communityQuotesContainer: {
    backgroundColor: '#FFFFFF',
    //display: 'flex',
    // margin: 'auto',
    padding: '45px 10px 100px',
    // paddingBottom: '100px',
    //flexDirection: 'column',
    '@media (max-width: 799px)': {
      justifyContent: 'center',
      // paddingTop: '0px',
      // alignItems: 'center',
      // height: '700px',
      // flexWrap: 'wrap',
      // flexDirection: 'column',
    },
  },
  communityQuotesNestedContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: 'auto',
    justifyContent: 'space-evenly',
    '& > div': {
      '@media (min-width: 960px)': {
        width: '33%',
      },
    },
  },
  communityQuotesComponent: {
    //maxWidth: '200px',
    //minWidth: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    /* '@media (max-width: 799px)': {
      alignItems: 'center',
      //width: '300px',
    }, */
  },
  communityQuotesImage: {
    marginBottom: '20px',
    display: 'flex',
    //maxWidth: '150px',
    /* '@media (max-width: 799px)': {
      alignItems: 'center',
      marginBottom: '20px',
    }, */
  },
  communityQuotesText: {
    textAlign: 'center',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    color: '#000000',
    marginBottom: '20px',
    display: 'flex',
    '@media (max-width: 799px)': {
      maxWidth: 350,
    },
  },
  communityQuotesName: {
    textAlign: 'center',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    fontSize: '12px',
    fontStyle: 'italic',
    color: '#000000',
    //marginTop: '40px',
    display: 'flex',
    /* '@media (max-width: 799px)': {
      textAlign: 'center',
      marginBottom: '20px',
    }, */
  },

  faqAccordionContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '50px',
    paddingBottom: '100px',
    paddingRight: '100px',
    paddingLeft: '100px',
    backgroundColor: '#FFFFFF',
    '@media (max-width: 799px)': {
      paddingRight: '0px',
      paddingLeft: '0px',
      textAlign: 'center',
      marginBottom: '20px',
    },
  },
  faqAccordionContainerTitle: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '50px',
    '@media (max-width: 799px)': {
      paddingBottom: '30px',
    },
  },
  faqAccordionComponent: {
    backgroundColor: '#FFFFFF',
    borderBottom: '0.5px solid gray',
    boxShadow: 'none',
    textAlign: 'left',
    padding: 10,
  },
  faqAccordianParagraph: {
    fontWeight: '900',
  },
  faqAccordianParagraphTwo: {},
  linkStyle: {
    textDecoration: 'none',
  },
}));

export default useStyles;
