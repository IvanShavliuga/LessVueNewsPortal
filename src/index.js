import Vue from 'vue';
import store from './store';
import appindex from './appindex';

Vue.config.devtools = true;

new Vue({
    el: '#app',
    store,
    data: {
    	Hello:"Hello world"
    },
    components: {
      appindex: appindex    
    }
    
});
