export const environment = {
  production: true,
  host: 'https://scalio-test-back.herokuapp.com',
  alertTimeOut: 3000
};

export const endpoints = {
  getPosts: `${environment.host}/posts`, // GET
  getPost: `${environment.host}/posts/:id` // GET
};
