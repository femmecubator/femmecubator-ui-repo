/* eslint-disable react/react-in-jsx-scope */
import {
  Mentors,
  Listings,
  Volunteer,
  About,
  Resources,
  Threads,
  Settings,
} from 'stubs';
import Home from 'components/Home/Home';
import RegistrationForm from 'components/AccountForms/RegistrationForm';
import LoginForm from 'components/AccountForms/LoginForm';
import ResetForm from 'components/AccountForms/ResetForm';
import { ROUTES_LABEL } from 'utils/constants';
import ForgotForm from 'components/AccountForms/ForgotForm';
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
  RESET,
  FORGOT,
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
      case LISTINGS:
        return Listings;
      case VOLUNTEER:
        return Volunteer;
      case ABOUT:
        return About;
      case RESOURCES:
        return Resources;
      case THREADS:
        return Threads;
      case SETTINGS:
        return Settings;
      case RESET:
        return ResetForm;
      case FORGOT:
        return ForgotForm;
      default:
        throw new Error('Route undefined!');
    }
  }
}
