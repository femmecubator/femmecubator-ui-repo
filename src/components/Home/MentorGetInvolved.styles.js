import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  headingContainer: {
    height: '400px',
    backgroundImage: `url('./assets/mentorhome.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '0% 30%',
    boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.5)',
    display: 'flex',
    alignItems: 'center',
    /* '@media (max-width: 799px)': {
      justifyContent: 'center',
    }, */
  },
  /*   headingComponent: {
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
  }, */
  headingComponentParagraph: {
    textAlign: 'left',
    width: '27%',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
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
    marginRight: '2%',
    '@media (max-width: 799px)': {
      marginBottom: '27px',
    },
  },
  waysMentorContainer: {
    //height: '330px',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    //justifyContent: 'space-evenly',
    paddingTop: '45px',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 799px)': {
      paddingTop: '20px',
      alignItems: 'center',
      //height: '700px',
      //flexWrap: 'wrap',
      //flexDirection: 'column',
    },
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
    marginBottom: '40px',
    //alignItems: 'center',
    '@media (max-width: 799px)': {
      marginBottom: '15px',
      textAlign: 'center',
    },
  },
  /* waysMentorComponent: {
    //maxWidth: '360px',
    //minWidth: '200px',
    //display: 'flex',
    //flexDirection: 'row',
    //alignItems: 'flex-start',
    '@media (max-width: 799px)': {
      alignItems: 'center',
      width: '300px',
    },
  }, */
  mentorTypeContainer: {
    //alignItems: 'flex-start',
    //justifyContent: 'space-between',
    padding: '20px',
    '@media (max-width: 799px)': {
      //flexDirection: 'row',
      alignItems: 'center',
    },
  },
  cohortMentor: {
    marginLeft: '7%',
    //display: 'flex',
    //alignItems: 'flex-center',
  },
  flexibleMentor: {
    marginLeft: '7%',
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
      marginBottom: '0px',
    },
  },
  waysMentorContainerSVG: {
    color: '#400CCC',
  },
  howToStartContainer: {
    //backgroundColor: '#FFFFFF',
    //display: 'flex',
    //justifyContent: 'space-evenly',
    paddingTop: '45px',
    //flexDirection: 'column',
    '@media (max-width: 799px)': {
      paddingTop: '20px',
      alignItems: 'center',
      height: '700px',
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  howToStartContainerTitle: {},
  howToStartComponent: {
    //maxWidth: '360px',
    //minWidth: '200px',
    display: 'flex',
    flexDirection: 'row',
    //alignItems: 'center',
    '@media (max-width: 799px)': {
      alignItems: 'center',
      width: '300px',
    },
  },
  /*   howToStartNumbers: {
    color: '#400CCC',
    fontSize: '20px',
    fontWeight: 500,
  }, */
  howToStartContainerParagraph: {
    textAlign: 'center',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    color: '#000000',
    marginBottom: '40px',
    '@media (max-width: 799px)': {
      textAlign: 'center',
      marginBottom: '0px',
    },
  },
  /* communityQuotesContainer: {
    backgroundColor: '#FFFFFF',
    //display: 'flex',
    //justifyContent: 'space-evenly',
    paddingTop: '45px',
    paddingBottom: '45px',
    //flexDirection: 'column',
    '@media (max-width: 799px)': {
      paddingTop: '0px',
      alignItems: 'center',
      //height: '700px',
      //flexWrap: 'wrap',
      //flexDirection: 'column',
    },
  }, */
  /* communityQuotesNestedContainer: {
    flexDirection: 'row',
  }, */
  /* communityQuotesComponent: {
    //maxWidth: '360px',
    //minWidth: '200px',
    //display: 'flex',
    //flexDirection: 'column',
    alignItems: 'flex-start',
    '@media (max-width: 799px)': {
      alignItems: 'center',
      //width: '300px',
    },
  }, */
  /* communityQuotesImage: {
    marginBottom: '20px',
    //display: 'flex',
    '@media (max-width: 799px)': {
      alignItems: 'center',
      marginBottom: '20px',
    },
  }, */
  /*   communityQuotesText: {
    textAlign: 'left',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    color: '#000000',
    marginBottom: '20px',
    //display: 'flex',
    '@media (max-width: 799px)': {
      textAlign: 'center',
      marginBottom: '20px',
    },
  },
  communityQuotesName: {
    textAlign: 'left',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    fontSize: '12px',
    fontStyle: 'italic',
    color: '#000000',
    //marginTop: '40px',
    //display: 'flex',
    '@media (max-width: 799px)': {
      textAlign: 'center',
      marginBottom: '20px',
    },
  }, */
  faqAccordionContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  faqAccordionComponent: {},
  faqAccordianParagraph: {},
  faqAccordianParagraphTwo: {},
}));

export default useStyles;
