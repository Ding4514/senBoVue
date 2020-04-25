<template>
    <div>
      <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>个人中心</template>
              <el-menu-item-group>    <!--/user/xx/1   1是 传参的  这是 第一种 传参方法-->
                <!--  :to  是传的是对象 -->
                <router-link :to="{name:'UserXX' , params:{id:this.$store.getters.getUser}}">
                  <el-menu-item index="1-1">用户中心</el-menu-item></router-link>
                <router-link to="/user/list">    <el-menu-item index="1-2">用户列表</el-menu-item></router-link>

              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>配车中心</template>
              <el-menu-item-group>
                <el-menu-item index="2-1">汽车选着</el-menu-item>
                <el-menu-item index="2-2">司机</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看详情</el-dropdown-item>
                <router-link to="/logout"><el-dropdown-item >退出登入</el-dropdown-item></router-link>

              </el-dropdown-menu>
            </el-dropdown>
            <!--获取 参数 username-->
            <!--getUser 不是 方法 是计算属性-->
            <span>{{$store.getters.getUser}}</span>
          </el-header>

          <el-main>
            <!--放路由视图的地方
            这里就是 子路由-->
            <router-view/>
          </el-main>
        </el-container>


      </el-container>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
