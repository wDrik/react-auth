export const TOKEN_KEY = '@login-auth';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => localStorage.setItem(TOKEN_KEY, token);
export const logout = () => localStorage.removeItem(TOKEN_KEY);

export const parseJwt = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  const base64 = token.split('.')[1]
    .replace('-', '+')
    .replace('_', '/');

  return JSON.parse(window.atob(base64));
};

export const isAdmin = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  const base64 = token
    .split('.')[1]
    .replace('-', '+')
    .replace('_', '/');

  const user = JSON.parse(window.atob(base64));

  return user.role === 'admin' ? true : false;
}