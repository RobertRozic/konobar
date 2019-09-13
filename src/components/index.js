import Vue from 'vue'
import UserNav from './UserNav';
import Restaurant from './Restaurant';
import CaffeBar from './CaffeBar';
import Bar from './Bar';
import Staff from './Staff';

import Unit from './Unit';
import Employee from './Employee';
import KonobarForm from './KonobarForm';
import KonobarTable from './KonobarTable';
import AdminNav from './AdminNav';

import Navbar from './Navbar';
import UnitDetails from "./UnitDetails";
import Review from "./Review";

Vue.component('usernav', UserNav);
Vue.component('restaurant', Restaurant);
Vue.component('caffebar', CaffeBar);
Vue.component('bar', Bar);
Vue.component('staff', Staff);

Vue.component('unit', Unit);
Vue.component('employee', Employee);
Vue.component('konobar-form', KonobarForm);
Vue.component('konobar-table', KonobarTable);
Vue.component('admin-nav', AdminNav);

Vue.component('navbar', Navbar);
Vue.component('unit-details', UnitDetails);
Vue.component('review', Review);
