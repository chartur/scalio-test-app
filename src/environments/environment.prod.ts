export const environment = {
  production: true,
  host: 'http://localhost:3000',
  alertTimeOut: 3000
};

export const endpoints = {
  getPosts: `${environment.host}/posts`, // GET
  getPost: `${environment.host}/posts/:id` // GET
};
