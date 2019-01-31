import api from './api';

export const TOKEN_KEY = '@login-auth';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => localStorage.setItem(TOKEN_KEY, token);
export const logout = () => localStorage.removeItem(TOKEN_KEY);

export const isAdmin = async () => {
  const token = localStorage.getItem(TOKEN_KEY);

  const base64 = token
    .split('.')[1]
    .replace('-', '+')
    .replace('_', '/');

  const { id } = JSON.parse(window.atob(base64));

  try {
    const { data: { user } } = await api.post('/auth/get_user_by_id', { id });

    if (user.role === 'admin') return true;
  } catch(err) {
    console.log(err);
  }

  return false;
}

export const getUser = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  const base64 = token.split('.')[1]
    .replace('-', '+')
    .replace('_', '/');

  return JSON.parse(window.atob(base64));
};
