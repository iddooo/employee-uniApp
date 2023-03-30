import Vue from 'vue'
import App from './App'
import GoEasyIM from "./lib/goeasy-im-1.5.1";

import 'static/style/common.scss'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

Vue.prototype.im = GoEasyIM.getInstance({
    host:'hangzhou.goeasy.io',
    appkey: 'BC-f92381b84db94a22961ca68919f48b20',
    // true表示支持通知栏提醒，false则表示不需要通知栏提醒
    allowNotification:true //仅有效于app，小程序和H5将会被自动忽略
});
Vue.prototype.GoEasyIM = GoEasyIM;

Vue.prototype.formatDate = function (t) {
    t = t || Date.now();
    let time = new Date(t);
    let str = time.getMonth() < 9 ? ('0' + (time.getMonth() + 1)) : (time.getMonth() + 1);
    str += '-';
    str += time.getDate() < 10 ? ('0' + time.getDate()) : time.getDate();
    str += ' ';
    str += time.getHours();
    str += ':';
    str += time.getMinutes() < 10 ? ('0' + time.getMinutes()) : time.getMinutes();
    return str;
}


