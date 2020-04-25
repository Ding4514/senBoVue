import Vue from "vue"
import Router from "vue-router";
//导入 自己写的组件
import login from "../view/login"
import index from "../view/index"   //写了 一个模块 一定 要 导入
import UserList from "../view/user/UserList";
import UserXX from "../view/user/UserXX";
import NoFound from "../view/error/404";

Vue.use(Router);

export default new Router({
 /*mode:"history",*/
 routes:[
   {
   //登入页
   path:"/login", //路径
   name:"login", //路由的名字
   component: login  //模块的名字
 },
   {
     //首页
     path: "/index",
     name: "index",
     component: index,
     children:[ //子路由
       {path:"/user/xx/:id",name:"UserXX",component:UserXX , props:true},
       {path:"/user/list",name:"UserList",component:UserList},
     ]
   },
   {
   path:"/gologin",
     redirect:"/login",//重定向 到 首页
   },
   {
     //设置 404找不到的页面
    path:"*",
    component:NoFound,
   }
 ]
})
