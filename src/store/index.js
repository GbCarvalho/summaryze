import Vue from "vue";
import Vuex from "vuex";
// import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

let store = null;

/* TOFIX - This plugin should automatically send all the VueX State to localStorage
 * but its not permitting somehow the page to load */
// const vuexLocalStorage = new VuexPersistence({
//   key: "summaryze",
//   storage: "localStorage",
//   reducer: (state) => ({
//     video: {
//       cards: state.video.cards,
//     },
//   }),
// });

store = new Vuex.Store({
  // plugins: [vuexLocalStorage.plugin],
  state: {
    video: {
      cards: [],
    },
  },
  mutations: {
    addVideo(state, payload) {
      state.video.cards.push(payload);
    },
  },
  getters: {
    videos: (state) => state.video.cards,
  },
  actions: {},
  modules: {},
});

export default store;
