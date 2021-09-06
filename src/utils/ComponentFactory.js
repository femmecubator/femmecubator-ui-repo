/* eslint-disable react/react-in-jsx-scope */
import {
  Mentors,
  Listings,
  Volunteer,
  Resources,
  Threads,
  Settings,
  Dev,
} from 'stubs';
import Home from 'components/Home/Home';
import RegistrationForm from 'components/AccountForms/RegistrationForm';
import LoginForm from 'components/AccountForms/LoginForm';
import ViewContainer from 'components/ViewContainer';
import AboutContainer from 'components/AboutContainer';
import { ROUTES_LABEL } from 'utils/constants';

const {
  HOME,
  MENTORS,
  LOGIN,
  REGISTER,
  LISTINGS,
  VOLUNTEER,
  ABOUT,
  RESOURCES,
  THREADS,
  SETTINGS,
  DASHBOARD,
  DEV,
} = ROUTES_LABEL;

export default class ComponentFactory {
  static create(label) {
    switch (label) {
      case HOME:
        return Home;
      case MENTORS:
        return Mentors;
      case LOGIN:
        return LoginForm;
      case REGISTER:
        return RegistrationForm;
      case DASHBOARD:
        return ViewContainer;
      case LISTINGS:
        return Listings;
      case VOLUNTEER:
        return Volunteer;
      case ABOUT:
        return AboutContainer;
      case RESOURCES:
        return Resources;
      case THREADS:
        return Threads;
      case SETTINGS:
        return Settings;
      case DEV:
        return Dev; // Temp component for testing dislog boxes
      default:
        throw new Error('Route undefined!');
    }
  }
}
