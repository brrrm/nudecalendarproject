import Vue from 'vue'
import App from './App.vue'
import Home from './components/HomeTemp'
import Calendars from './components/CalendarsTemp'
import Prints from './components/PrintsTemp'
import Launch from './components/LaunchTemp'
import Contact from './components/ContactTemp'
import VueRouter from 'vue-router'

Vue.config.productionTip = false;

const routes = [
    { path: '/', component: Home },
    { path: '/calendars', component: Calendars },
    { path: '/prints', component: Prints },
    { path: '/launch', component: Launch },
    { path: '/contact', component: Contact }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.use(VueRouter);

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
