import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import NavigationComponent from '../navigation/NavigationComponent.vue';
import ReviewsComponent from '../reviews/ReviewsComponent.vue';
import LoginComponent from '../login/LoginComponent.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'HomePage',
        components: {
            default: HomePage,
            nav: NavigationComponent,
            login: LoginComponent
        }
    },
    {
        path: '/reviews',
        name: 'Reviews',
        components: {
            default: ReviewsComponent,
            nav: NavigationComponent
        }
    }]
});

