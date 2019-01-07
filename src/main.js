import Vue from 'vue'
import './plugins/vuetify'

Vue.config.productionTip = false

import App from './App.vue'

new Vue({
    render: h => h(App),
}).$mount('#app')