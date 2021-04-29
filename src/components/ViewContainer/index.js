import React, { Suspense } from 'react';
import { getTokenCookie } from '../../utils/cookies';
import jwt_decode from 'jwt-decode';
// import Directory from '../Directory';
const Directory = React.lazy(() => import('../Directory'));
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

const ViewContainer = () => {
  const { role_id } = jwt_decode(getTokenCookie());

  return (
    <>
      {parseInt(role_id) === 0 ? (
        <div>Mentor Dashboard</div>
      ) : (
        <Suspense
          fallback={
            // <h1>LOADING</h1>
            <CircularProgress
              size="10rem"
              style={{
                margin: '50vh',
                // paddingTop: '10rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            />
          }
        >
          <Directory />
        </Suspense>
        // <div>Mentee Dashboard</div>
      )}
    </>
  );
};

export default ViewContainer;
