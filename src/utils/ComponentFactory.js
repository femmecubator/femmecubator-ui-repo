/* eslint-disable react/react-in-jsx-scope */
import Landing from 'stubs/Landing';
import Login from 'stubs/Login';
import Register from 'stubs/Register';
import Mentors from 'stubs/Mentors';
import Listings from 'stubs/Listings';
import { ROUTES_LABEL } from 'utils/constants';
const { LANDING_PAGE, MENTORS, LOGIN, REGISTER, LISTINGS } = ROUTES_LABEL;

export default class ComponentFactory {
  static create(label) {
    switch (label) {
      case LANDING_PAGE:
        return Landing;
      case MENTORS:
        return Mentors;
      case LOGIN:
        return Login;
      case REGISTER:
        return Register;
      case LISTINGS:
        return Listings;
      default:
        throw new Error('Route undefined!');
    }
  }
}
