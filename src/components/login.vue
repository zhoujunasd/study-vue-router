<template>
    <div>
        <h2>登录页面</h2>
        <input type="text" v-model="username">
        <br>
        <input type="text" v-model="password">
        <br>
        <button @click="handleclick">登录</button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'login',
        data(){
            return {
                username:"",
                password:""
            }
        },
        created() {
            // 获取从首页传递过来的查询字符串
            console.log(this.$route)
            // this.$route的属性：fullPath，meta，name，params，path，query，matched

            console.log(this.$router)
            console.log(this.$route.params)
            console.log(this.$route.query)
        },
        methods:{
            handleclick(){
                axios.post('http://localhost:3000/login',{
                    username:this.username,
                    password:this.password
                }).then(res=>{
                        if(res.data.code == 200){
                            alert('登录成功')
                            // this.$router.push('/')
                            this.$router.push({name:"home"})
                        }else{
                            alert('登录失败')
                        }
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>