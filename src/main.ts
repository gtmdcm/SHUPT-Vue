import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Axios from 'axios';

Vue.config.productionTip = false;
Axios.interceptors.request.use((config) => {
    if (localStorage.getItem('JWT')) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('JWT')}`;
    }
    return config;
}, (err) => {
    return Promise.reject(err);
});
new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
