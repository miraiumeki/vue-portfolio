import Vue from 'vue';
import Router from 'vue-router';
import Blog from './components/Blog';
import News from './components/News';
import Company from './components/Company';
import Service from './components/Service';
import SystemDevelop from './components/SystemDevelop';
import AppAndVr from './components/AppAndVr';
import WebDevelop from './components/WebDevelop';
import Recruit from './components/Recruit';
import Access from './components/Access';
import Contact from './components/Contact';
import Footer from './components/Footer';
import login from './components/login/login';
import register from './components/login/register';
import store from './store';
  
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/components/Blog',
            component: Blog,
            beforeEnter(to, from, next) {
                if(store.getters.idToken) {
                    next();
                } else {
                    next('/login');
                }
            }
        },     
        {
            path: '/components/News',
            component: News,
            beforeEnter(to, from, next) {
                if(store.getters.idToken) {
                    next();
                } else {
                    next('/login');
                }
            }
        },
        {
            path: '/components/Company',
            component: Company,
            beforeEnter(to, from, next) {
                if(store.getters.idToken) {
                    next();
                } else {
                    next('/login');
                }
            }
        },
        {
            path: '/components/Service',
            component: Service,
            beforeEnter(to, from, next) {
                if(store.getters.idToken) {
                    next();
                } else {
                    next('/login');
                }
            }
        },
        {
            path: '/components/SystemDevelop',
            component: SystemDevelop,
            beforeEnter(to, from, next) {
                if(store.getters.idToken) {
                    next();
                } else {
                    next('/login');
                }
            }
        },
        {
            path: '/components/AppAndVr',
            component: AppAndVr,
            beforeEnter(to, from, next) {
                if(store.getters.idToken) {
                    next();
                } else {
                    next('/login');
                }
            }
        },
        {
            path: '/components/WebDevelop',
            component: WebDevelop,
            beforeEnter(to, from, next) {
                if(store.getters.idToken) {
                    next();
                } else {
                    next('/login');
                }
            }
        },
        {
            path: '/components/Recruit',
            component: Recruit,
            beforeEnter(to, from, next) {
                if(store.getters.idToken) {
                    next();
                } else {
                    next('/login');
                }
            }
        },
        {
            path: '/components/Access',
            component: Access,
            beforeEnter(to, from, next) {
                if(store.getters.idToken) {
                    next();
                } else {
                    next('/login');
                }
            }
        },
        {
            path: '/components/Contact',
            component: Contact,
            beforeEnter(to, from, next) {
                if(store.getters.idToken) {
                    next();
                } else {
                    next('/login');
                }
            }
        },
        {
            path: '/components/Footer',
            component: Footer,
            beforeEnter(to, from, next) {
                if(store.getters.idToken) {
                    next();
                } else {
                    next('/login');
                }
            }
        },
        {
            path: '/login',
            component: login,
            beforeEnter(to, from, next) {
                if(store.getters.idToken) {
                    next('/');
                } else {
                    next();
                }
            }

        },
        {
            path: '/register',
            component: register,
            beforeEnter(to, from, next) {
                if(store.getters.idToken) {
                    next('/');
                } else {
                    next();
                }
            }

        }

    ]
})