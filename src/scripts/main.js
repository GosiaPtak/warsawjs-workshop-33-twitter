import App from '@/components/app';
import Vue from 'vue';
import { BootstrapVue, FormPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue, FormPlugin);

// eslint-disable-next-line no-new
new Vue({
    el: '#app',
    components: {
        App
    }
});
