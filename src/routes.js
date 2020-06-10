
import alerts from './alerts';
import posts from './posts';
import codes from './codes';
import users from './users';
import books from './books';
import profile from './profile';
import followers from './followers';
import postsuser from './postsuser';
import groupsuser from './groupsuser';
import booksuser from './booksuser';
import codesuser from './codesuser';
import cardsuser from './cardsuser';
import messages from './messages';
import settings from './settings';
import commentsuser from './commentsuser';
import postgroup from './postgroup';
export const routes = [{
  	 path: '/', 
  	 component: posts
  },{
  	 path: '/alerts',
  	 component:alerts
  },{
  	 path: '/codes',
  	 component:codes
  },{
  	 path: '/users',
  	 component:users
  },{
    path: '/books',
  	 component:books
  },{
  	 path: '/profile',
    component:profile,
  },{
    path:"/followers",
    component:followers
  },{
    path:"/postsuser",
    component:postsuser
  },{
    path:"/groupsuser",
    component:groupsuser
  },{
  	 path: '/messages',
    component:messages,
  },{
    path:"/cardsuser",
    component:cardsuser
  },{
    path:"/codesuser",
    component:codesuser
  },{
    path:"/commentsuser",
    component:commentsuser
  },{
  	 path: '/booksuser',
    component:booksuser,
  },{
  	 path: '/settings',
    component:settings,
  },{
    path:'/groupview',
    component:postgroup
  }
]