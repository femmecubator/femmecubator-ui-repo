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
      default:
        throw new Error('Route undefined!');
    }
  }
}
