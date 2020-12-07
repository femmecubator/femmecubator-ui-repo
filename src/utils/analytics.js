import { pageview, event } from 'react-ga';
import { ANALYTICS_TYPE } from 'utils/constants';
export const trackEvent = (arg) => {
  if (process.env.NODE_ENV === 'production') {
    const { type = ANALYTICS_TYPE.PAGE_VIEW, options = {} } = arg || {};
    switch (type) {
      case ANALYTICS_TYPE.PAGE_VIEW:
        pageview(window.location.pathname + window.location.search);
        break;
      case ANALYTICS_TYPE.EVENT:
        event(options);
        break;
      default:
        throw new Error('Unknown analytics type');
    }
  }
};
pageview(window.location.pathname + window.location.search);
