// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from "./store"

import VueRouter from "vue-router"  //导入 vueRouter

import ElementUI from 'element-ui'   //ui
//import 'element-ui/lib/theme-chalk/index.css' //ui css文件
import 'element-angular/theme/index.css'

import axios from "axios"
Vue.prototype.axios=axios;  //显示安装 axios

import Vuex from "vuex"
Vue.use(Vuex)

import router from "./router" // 导入 路由
//路由跳转前   （和过滤器 差不多）
//to 是去的路径  from 是到的路径  next 是下一个 路由
router.beforeEach((to,from,next)=>{
  let isLogin=localStorage.getItem("isLogin");
  //注销
  if (to.path == "/logout"){
    localStorage.clear() //清空登入状态
    next({path:"/login"}) // 路由到 登入页
  }/*else if (to.path=="/login"){
    if (isLogin!=null) {
      next({path: "/index"})
    }
  }else if(isLogin==null){
    alert("isLogin是空的");
    next({path:"/login"})
  }*/
  next(); //下个 路由
});

Vue.use(VueRouter); //声明 使用 VueRouter（vue 路由）
Vue.use(ElementUI);  //显示 安装  ElementUI

Vue.config.productionTip = false //生产环境 的警告  不需要 警告

/* 入口函数  所有的初始化 都在 这边做*/
new Vue({
  el: '#app',
  router,  //使用 路由
  store,   //使用 Vuex
  render:h => h(App)  //初始化 ElementUI用的
})
