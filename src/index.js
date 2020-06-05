import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import appindex from './appindex';
import {routes} from './routes';
Vue.config.devtools = true;

Vue.use(VueRouter);
const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
    el: '#app',
    store,
    data: {
    	Hello:"Hello world"
    },
    components: {
      appindex: appindex    
    },
    router
});
