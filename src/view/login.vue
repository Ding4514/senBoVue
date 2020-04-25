<template>
  <div>
    <!--ref 相当于 id-->
    <el-form ref="form" :rules="rules" :model="form" label-width="80px" class="login-box">
      <h1 class="login-zi">欢迎登入阿森秘密小仓库</h1>
      <el-form-item label="账号:" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password" itemtype="password"></el-input>
      </el-form-item>
      <el-form-item>
        <!--@click="onSubmit('form')   里面 要加 引号 form 就是 ref的值-->
        <el-button type="primary" class="login-but" @click="onSubmit('form')">登入</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                form: {
                    username: "",
                    password: "",
                },
                rules: {
                    username: [
                        {required: true, message: "请输入账号名称", trigger: "blur"},
                        {min: 3, max: 5, message: "长度在3到5个字符", trigger: "blur"}
                    ],
                    password: [
                        {required: true, message: "请输入密码", trigger: "blur"},
                        {min: 3, max: 5, message: "长度在3到5个字符", trigger: "blur"}
                    ]
                }
            }
        },
        methods: {
            onSubmit: function (formName) {
                //传入 表单  验证表单
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                       var param=new URLSearchParams();
                       param.append("username",this.form.username),
                           param.append("password",this.form.password);
                        this.axios.post("http://localhost:8400/user/user/xx",param)
                            .then(req => {
                               this.$store.dispatch("snySetterUser",{username:req.data})
                            })
                        //登入后 记入 状态
                        /* localStorage.setItem("isLogin", "true"),*/
                        /*  alert(this.form.username)
                          this.$store.dispatch('snySetterUser', {username : this.form.username});
                          alert(this.$store.getters.getUser);*/
                        /*跳转页面*/
                        this.$router.push({name: "index", params: {username: this.form.username}});
                    } else {
                        this.$message.error('账号密码不正确');
                        return false;
                    }
                })
            },
        }
    }
</script>

<style lang="css" scoped>
  .login-box {
    width: 25%;
    margin: 180px auto;
    border: 1px solid #DCDFE6;
    padding: 35px;
    border-radius: 5px;
    box-shadow: 0 0 25px #DCDFE6;
  }

  .login-but {
    width: 100%;
  }

  .login-zi {
    text-align: center;
  }
</style>
