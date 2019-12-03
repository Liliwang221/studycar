import Vue from 'vue'
import Vuex from 'vuex'
import detail from "./modules/detail"
import createLogger from "vuex/dist/logger"

Vue.use(Vuex)

export default new Vuex.Store({
 modules:{
   detail
 },
 plugins:[createLogger]

})
