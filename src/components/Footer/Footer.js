import React from 'react';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core/';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link as RouterLink } from 'react-router-dom';
import { ReactComponent as FemmecubatorLogo } from './assets/femmecubatorlogo.svg';
import { ReactComponent as Instagram } from './assets/instagram.svg';
import { ReactComponent as Twitter } from './assets/twitter.svg';
import { ReactComponent as Patreon } from './assets/patreon.svg';
import { ReactComponent as Linkedin } from './assets/linkedin.svg';

const useStyles = makeStyles(() => ({
  footer: {
    height: '400px',
    backgroundColor: '#4F4F4F',
    display: 'flex',
    padding: '67px',
    justifyContent: 'space-around',
    '@media (max-width: 960px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '43px',
      height: 'auto',
    },
  },
  footerHeaders: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    fontSize: '18px',
    textAlign: 'left',
    marginBottom: '28px',
    color: 'white',
  },
  footerParagraph: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    textAlign: 'left',
    color: 'white',
  },
  femmeLogo: {
    marginRight: '30px',
  },
  footerContainers: {
    flexBasis: '383px',
    flexShrink: '1',
    marginRight: '30px',
    '@media (max-width: 960px)': {
      flexBasis: 'auto',
      marginRight: '0px',
      marginBottom: '30px',
    },
  },
  quickLinksContainer: {
    marginRight: '30px',
    '@media (max-width: 960px)': {
      marginRight: '0px',
      marginBottom: '30px',
    },
  },
  quickLinks: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    textAlign: 'left',
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    lineHeight: '24px',
  },
  socialNetworks: {
    marginRight: '20px',
  },
  socialNetworksContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const Footer = () => {
  const {
    footer,
    footerHeaders,
    footerParagraph,
    footerContainers,
    femmeLogo,
    quickLinks,
    socialNetworks,
    socialNetworksContainer,
    quickLinksContainer,
  } = useStyles();

  const theme = createTheme({
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

  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div {...{ className: footer, 'data-testid': 'footerContainer' }}>
      {!matches ? (
        <FemmecubatorLogo
          {...{ className: femmeLogo, 'data-testid': 'femmecubatorLogo' }}
        />
      ) : null}
      <div className={footerContainers}>
        <Typography variant="h3" className={footerHeaders}>
          Femmecubator © 2022
        </Typography>
        <Typography
          {...{
            variant: 'body1',
            className: footerParagraph,
            paragraph: true,
          }}
        >
          Technology needs more women of color at the table. Femmecubator is an
          online community for women of color (WOC), including self-identified
          and non-binary individuals, who want to transform their careers - and
          the world - through tech. With access to resources and a supportive
          network of leaders, we’ll help you find your next step in tech.
        </Typography>
      </div>
      <div className={quickLinksContainer}>
        <Typography variant="h3" className={footerHeaders}>
          Quick Links
        </Typography>
        <Link
          {...{
            component: RouterLink,
            to: '/about',
            className: quickLinks,
          }}
        >
          What We Do
        </Link>
        <Link
          {...{
            component: RouterLink,
            target: '_blank',
            to: { pathname: 'https://medium.com/femmecubator' },
            className: quickLinks,
          }}
        >
          FC Labs
        </Link>
        <Link
          {...{
            component: RouterLink,
            to: '/about?page=contactus',
            className: quickLinks,
          }}
        >
          Contact Us
        </Link>
        <Link
          {...{
            component: RouterLink,
            to: '/',
            className: quickLinks,
          }}
        >
          Code of Conduct
        </Link>
      </div>
      <div>
        <Typography variant="h3" className={footerHeaders}>
          Follow Us
        </Typography>
        <div className={socialNetworksContainer}>
          <Link
            {...{
              component: RouterLink,
              target: '_blank',
              to: { pathname: 'https://instagram.com/femmecubator' },
              className: quickLinks,
            }}
          >
            <Instagram
              {...{ 'data-testid': 'SocialSVG', className: socialNetworks }}
            />
          </Link>
          <Link
            {...{
              component: RouterLink,
              target: '_blank',
              to: { pathname: 'https://twitter.com/femmecubator' },
              className: quickLinks,
            }}
          >
            <Twitter
              {...{ 'data-testid': 'SocialSVG', className: socialNetworks }}
            />
          </Link>
          <Link
            {...{
              component: RouterLink,
              target: '_blank',
              to: { pathname: 'https://www.patreon.com/femmecubator' },
              className: quickLinks,
            }}
          >
            <Patreon
              {...{ 'data-testid': 'SocialSVG', className: socialNetworks }}
            />
          </Link>
          <Link
            {...{
              component: RouterLink,
              target: '_blank',
              to: { pathname: 'https://www.linkedin.com/company/femmecubator' },
              className: quickLinks,
            }}
          >
            <Linkedin {...{ 'data-testid': 'SocialSVG' }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
