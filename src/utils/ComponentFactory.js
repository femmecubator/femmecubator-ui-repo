/* eslint-disable react/react-in-jsx-scope */
import { Register, Mentors, Listings, Volunteer } from 'stubs';
import Home from 'components/Home/Home';
import LoginForm from 'components/AccountForms/LoginForm';
import { ROUTES_LABEL } from 'utils/constants';
const { HOME, MENTORS, LOGIN, REGISTER, LISTINGS, VOLUNTEER } = ROUTES_LABEL;

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
        return Register;
      case LISTINGS:
        return Listings;
      case VOLUNTEER:
        return Volunteer;
      default:
        throw new Error('Route undefined!');
    }
  }
}
