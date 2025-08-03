const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const API = {
  LOGIN: `${BASE_URL}/api/auth/login`,
  LOGOUT: `${BASE_URL}/api/auth/logout`,
  SIGNUP: `${BASE_URL}/api/auth/signup`,
  EMAILCHECK: `${BASE_URL}/api/auth/email/check`,

  DICTIONARY: `${BASE_URL}/api/dict`,
};

export default API;
