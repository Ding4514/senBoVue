<template>
    <div>
      <!--id={{$route.params.id}}  获取 参数的一种方法-->
      我是个人中心 id={{id}}
    </div>
</template>

<script>
    export default {
        props:["id"],  /*获取参数的第二种方法*/
        name: "UserXX",
        beforeRouteEnter:(to,from,next)=>{ //在方法之前 执行
            console.log("准备进入个人信息");
            next(); //放行
        },
        beforeRouteLeave:(to,from,next)=>{ //在方法之后 执行
            console.log("准备退出个人信息");
            /*应为 在在方法 只前 执行 没有 当前对象 所有没有this对象
            点不了方法  可以在 next 调用 回调方法*/
            next(vm => {
                vm.getDate()
            }); //放行
        },
        methods:{
            getDate:function () {
                this.axios({
                    method:"get",
                    url:"http://localhost:8080/date.json"
                }).then(function (req) {
                    console.log("成功")
                }).catch(function (error) {
                    console.log(error)
                })

            }
        }
    }
</script>

<style scoped>

</style>
