import Landing from 'stubs/Landing';
import Login from 'stubs/Login';
import Register from 'stubs/Register';
import Mentor from 'stubs/Mentor';
import { ROUTES_LABEL } from 'utils/constants';

const { LANDING_PAGE, MENTOR, LOGIN, REGISTER } = ROUTES_LABEL;

export default class ComponentFactory {
  static create(label) {
    switch (label) {
      case LANDING_PAGE:
        return Landing;
      case MENTOR:
        return Mentor;
      case LOGIN:
        return Login;
      case REGISTER:
        return Register;
      default:
        throw new Error('Routes undefined!');
    }
  }
}
