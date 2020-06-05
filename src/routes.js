
import alerts from './alerts';
import posts from './posts';
import codes from './codes';
import users from './users';
import books from './books';

export const routes = [
  {path: '/', component: posts},
  {path: '/alerts',component:alerts},
  {path: '/codes',component:codes},
  {path: '/users',component:users},
  {path: '/books',component:books}
  
]