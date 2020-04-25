<template>
  <div id="app">
    <router-view/> <!-- 视图 router是 展示数据 用的-->
  </div>
</template>

<script>
export default {
  name: 'App',
    mounted(){
      //监听 saveState 方法
    window.addEventListener("unload",this.saveState);
    },
  methods:{
      saveState(){
          //json 把对象 转成 string
          localStorage.setItem("state",JSON.stringify(this.$store.state.user));
      }
  }
}
</script>

