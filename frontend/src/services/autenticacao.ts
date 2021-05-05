export const autenticacao = () => localStorage.getItem('token') !== null;
export const getToken = () => localStorage.getItem('token');
export const entrar = (token: string) => {
  localStorage.setItem('token', token);
};
export const sair = () => {
  localStorage.removeItem('token');
};