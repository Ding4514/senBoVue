import Vue from "vue"
import Vuex from "vuex"
import user from "./modules/User"

Vue.use(Vuex) ;//声明 使用
/*
* Vuex  的使用
* */
//const 是 常量
//   state 是 状态
//是专门存数据的地方
//看localStorage 有没有 对象  有就取 没有就创建
/*const state =localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")): {
  //user 是一个 对象  username是一个属性
  user:{
    username:""
  }
};





const getters = {
  //取出 user的·属性
  getUser(state){
    return state.user.username;
  }
};


//写数据   是同步 执行的
const mutations = {
  setUser(state,user){
    state.user=user; //写数据  是同步 执行的
  }
};


//写入数据  这个方法是异步执行的
const actions = {
  //setter 参数 是上下文的意思    就是 25行的setter
  snySetterUser(context,user){
    //setter 提交数据  调用 setUser方法
    //把user 传给她  就 可以  更新参数了
    context.commit("setUser",user);
    }
};*/

export default new Vuex.Store({
  /*state,
  getters,
  mutations,
  actions*/

  modules:{
    user
  }
})






