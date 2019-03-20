// client-entry
import Vue from 'vue';
import App from './Hello.vue';

const VueApp = Vue.extend(App);
window.app = new VueApp({
  el: '.my-app',
});

