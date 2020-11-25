import { BASE_URL } from '../../globals/constants';

const loginURL = '/api/auth/login';

export const login = async (userName, password) => {
  try {
    const url = `${BASE_URL}${loginURL}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userName,
        password: password,
        origin: 'MOBILE',
      }),
    });
    return await response.json();
  } catch (e) {
    console.log('ERROR - login', e);
    return [];
  }
};
