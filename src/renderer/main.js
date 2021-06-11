import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);


import App from './App'
import router from './router'
import store from './store'
import db from './db'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.$db = db
db.init()
Vue.use(ElementUI);
const i18n = new VueI18n({
  locale: 'zh', // 将要切换的语言，可以通过url拼的参数获取，用户行为select选择获取，本地manifest配置获取等，根据场景动态获取
  messages: {
    'zh': require('./languages/zh.json'),  // 本地资源文件，我这里配2个语言，中文&英文，src下根据个人情况放置
    'en': require('./languages/en.json')
  }
});


/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  i18n,
  template: '<App/>'
}).$mount('#app')
