import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import firebase from 'firebase'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyA4A3Bp5tGDZoCHpUldmuFwr1gje-Kpulc",
  authDomain: "preventra.firebaseapp.com",
  databaseURL: "https://preventra.firebaseio.com",
  projectId: "preventra",
  storageBucket: "preventra.appspot.com",
  messagingSenderId: "321513816834",
  appId: "1:321513816834:web:55fe50e1689c3a51ac781b",
  measurementId: "G-FYTCN62NFH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
