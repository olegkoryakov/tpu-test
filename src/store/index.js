import Vue from 'vue';
import Vuex from 'vuex';
import gallery from './modules/gallery';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    langs: {
      current: 'ru',
      options: ['ru', 'en'],
    },
  },
  modules: {
    gallery,
  },
  getters: {
    langs(state) {
      return state.langs;
    },
  },
  actions: {
    setCurrentLanguage: ({ commit }, lang) => {
      commit('setCurrentLanguage', lang);
    },
  },
  mutations: {
    setCurrentLanguage: (state, lang) => { state.langs.current = lang; },
  },
});
