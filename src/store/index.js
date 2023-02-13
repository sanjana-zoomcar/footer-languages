/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import datalang from "./modules/dataLang";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { datalang },
});
