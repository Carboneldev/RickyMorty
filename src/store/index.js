import { createStore } from "vuex";

const URL = "https://rickandmortyapi.com/api/character";

export default createStore({
  state: () => ({
    characters: [],
    charactersFilter: [],
    prev: "",
    next: "",
    person: {},
    isLoading: false,
  }),
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload;
    },
    setPrev(state, payload) {
      state.prev = payload;
    },
    setNext(state, payload) {
      state.next = payload;
    },
    setPerson(state, payload) {
      state.person = payload;
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    }
  },
  actions: {
    async getCharacters({ commit }, page = URL) {
      try {
        commit("setLoading", true);
        const response = await fetch(page);
        const { results, info } = await response.json();
        commit("setCharacters", results);
        commit("setCharactersFilter", results);
        commit("setNext", info.next);
        commit("setPrev", info.prev);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        commit("setLoading", false);
      }
    },

    async filterByNameAndStatus({ commit, state }, { name, status }) {
      try {
        commit("setLoading", true);
        const res = await fetch(`${URL}/?name=${name.toLowerCase()}&status=${status.toLowerCase()}`);
        const { results, info } = await res.json();
        commit("setCharactersFilter", results);
        commit("setNext", info.next);
        commit("setPrev", info.prev);
      } catch (error) {
        console.error("Error filtering by name and status:", error);
        commit("setCharactersFilter", []);
      } finally {
        commit("setLoading", false);
      }
    },

    async filterByName({ commit }, name) {
      try {
        commit("setLoading", true);
        const res = await fetch(`${URL}/?name=${name.toLowerCase()}`);
        const { results, info } = await res.json();
        commit("setCharactersFilter", results);
        commit("setNext", info.next);
        commit("setPrev", info.prev);
      } catch (error) {
        console.error("Error filtering by name:", error);
        commit("setCharactersFilter", []);
      } finally {
        commit("setLoading", false);
      }
    },

    resetFilters({ commit }) {
      commit("setCharactersFilter", state.characters);
      commit("setNext", "");
      commit("setPrev", "");
    },
  },
});
