import Vue from 'vue'
import App from './Assets/vue/App.vue'
import router from './Assets/vue/router/index';

import store from './Assets/vue/store';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');
