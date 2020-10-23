/* eslint-disable react/react-in-jsx-scope */
import { Landing, Login, Register, Mentors, Listings, Volunteer } from 'stubs';
import { ROUTES_LABEL } from 'utils/constants';
const {
  LANDING_PAGE,
  MENTORS,
  LOGIN,
  REGISTER,
  LISTINGS,
  VOLUNTEER,
} = ROUTES_LABEL;

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
      case VOLUNTEER:
        return Volunteer;
      default:
        throw new Error('Route undefined!');
    }
  }
}
