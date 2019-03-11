import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({ //创建容器
    state: {
        isLoading: true
    },
    mutations: { //修改store的状态
        updatedIsLoading(state, loading) {
            state.isLoading = loading;
        }
    }
})

export default store;