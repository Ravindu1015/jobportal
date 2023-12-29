export const server = "https://jobportal-6qtv.onrender.com/api";

const apiList = {
  login: `${server}/auth/login`,
  signup: `${server}/auth/signup`,
  forgot: `${server}/auth/password/forgot`,
  reset: `${server}/auth/password/reset`,
  uploadCV: `${server}/upload/resume`,
  uploadProfile: `${server}/upload/profile`,
  jobs: `${server}/job`,
  applications: `${server}/application`,
  rating: `${server}/rating`,
  user: `${server}/user`,
  applicants: `${server}/applicants`,
};

export default apiList;
