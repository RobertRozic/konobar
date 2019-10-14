import Vue from 'vue'

import Unit from './Unit';
import Employee from './Employee';
import KonobarForm from './KonobarForm';
import KonobarTable from './KonobarTable';

import Navbar from './Navbar';
import UnitDetails from "./UnitDetails";
import Review from "./Review";

Vue.component('unit', Unit);
Vue.component('employee', Employee);
Vue.component('konobar-form', KonobarForm);
Vue.component('konobar-table', KonobarTable);

Vue.component('navbar', Navbar);
Vue.component('unit-details', UnitDetails);
Vue.component('review', Review);
