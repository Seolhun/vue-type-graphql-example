import Vue from 'vue';
import Vuex, { ActionTree, MutationTree, Store } from 'vuex';

Vue.use(Vuex);
interface State {
  login: boolean;
  postUser: boolean;
  postOption: boolean;
}

const state: State = {
  login: false,
  postUser: false,
  postOption: false,
};

const actions: ActionTree<State, any> = {
  async initAuth({ commit }): Promise<void> {
    console.log('');
  },
};

const mutations: MutationTree<State> = {
  USER_LOGINING(state: State): void {
    state.login = true;
  },

  USER_LOGINING_FINAL(state: State): void {
    state.login = false;
  },

  POST_USER_INFO(state: State): void {
    state.postUser = true;
  },

  POST_USER_FINAL(state: State): void {
    state.postUser = false;
  },

  POST_OPTION_INFO(state: State): void {
    state.postOption = true;
  },

  POST_OPTION_FINAL(state: State): void {
    state.postOption = false;
  },
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
});
