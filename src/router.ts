import Vue from 'vue';
import Router from 'vue-router';
import FlatSurfaceShader from 'vue-flat-surface-shader';
import Home from './views/Home.vue';
import SignIn from './views/SignIn.vue';

Vue.use(FlatSurfaceShader);
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/sign-in',
            name: 'sign-in',
            component: SignIn,
        },
    ],
});
