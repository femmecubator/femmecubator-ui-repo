import axios from 'axios';

const request = axios.create({
  withCredentials: true,
});

/* 
  The below is required if you want your API to return 
  server message errors. Otherwise, you'll just get 
  generic status errors.

  If you use the interceptor below, then make sure you 
  return an err message from your express route: 

  res.status(404).json({ err: "You are not authorized to do that." })

*/
request.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response.data.err)
);

export default request;
