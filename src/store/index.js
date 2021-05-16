import Vue from 'vue'
import Vuex from 'vuex'
import todoModule from "@/store/modules/todoModule";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todoModule
  },
})
