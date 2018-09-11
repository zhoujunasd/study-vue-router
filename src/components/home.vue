<template id="home">
    <div>
        <h2>首页</h2>
        <router-link :to="{path:'/login',query:{
            userinfo:'sad dsa'
        }}">跳转至登录</router-link>
    </div>
</template>

<script>
export default {
  name: 'home'
};
</script>

<style scoped>
</style>