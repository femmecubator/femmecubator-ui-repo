/* eslint-disable react/react-in-jsx-scope */
import {
  Mentors,
  Listings,
  Volunteer,
  // Threads,
  Settings,
  Forgot,
  Reset,
  BackOffice,
} from 'stubs';
import Home from 'components/Home/Home';
import MentorGetInvolved from 'components/Home/MentorGetInvolved';
import RegistrationForm from 'components/AccountForms/RegistrationForm';
import LoginForm from 'components/AccountForms/LoginForm';
import ViewContainer from 'components/ViewContainer';
import AboutContainer from 'components/AboutContainer';
import { ROUTES_LABEL } from 'utils/constants';
import ResetPassword from 'components/ResetPassword';

const {
  HOME,
  MENTORS,
  LOGIN,
  REGISTER,
  LISTINGS,
  VOLUNTEER,
  ABOUT,
  GETINVOLVED,
  // THREADS,
  SETTINGS,
  DASHBOARD,
  FORGOTPASSWORD,
  RESETPASSWORD,
  BACKOFFICE,
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
      case GETINVOLVED:
        return MentorGetInvolved;
      // case THREADS:
      //   return Threads;
      case SETTINGS:
        return Settings;
      case FORGOTPASSWORD:
        return Forgot;
      case RESETPASSWORD:
        return ResetPassword;
      case BACKOFFICE:
        return BackOffice;
      default:
        throw new Error('Route undefined!');
    }
  }
}
