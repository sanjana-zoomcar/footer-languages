/* eslint-disable */
import data from "@/data/data-c.js";

const state = {
  langS: "eng",
  data,
  langData: data["eng"],
};

const getters = {
  selLang: (state) => state.langData,
  allInfo: (state) => state.data,
};

const actions = {
  async selectLanguage({ commit }, lang) {
    let selLang = {};
    switch (lang) {
      case "eng":
        selLang = data["eng"];
        break;
      case "thai":
        selLang = data["thai"];
        break;
      default:
        selLang = data["eng"];
        break;
    }
    commit("selectLang", selLang, lang);
  },
  async initialDisplay({ commit }) {
    commmit("initialDisp", data[langS]);
  },
};

const mutations = {
  selectLang(state, langData, langS) {
    state.langData = langData;
    state.langS = langS;
  },
  initialDisplay: (state, lang) => (state.lang = lang),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
