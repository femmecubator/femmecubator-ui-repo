import React from 'react';
import { useHistory } from 'react-router';

const Threads = () => {
  const history = useHistory();

  // redirecting to getInvolved
  history.push('/getinvolved');

  return <div>Threads Page</div>;
};

export default Threads;
