import React from 'react';
import { getTokenCookie } from '../../utils/cookies';
import jwt_decode from 'jwt-decode';
import Directory from '../Directory';

const ViewContainer = () => {
  const { role_id } = jwt_decode(getTokenCookie());

  return (
    <>{parseInt(role_id) === 0 ? <div>Mentor Dashboard</div> : <Directory />}</>
  );
};

export default ViewContainer;
