<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 使用router-link，不刷新当前页面 -->
    <!-- a标签会刷新当前页面，重新请求所有依赖 -->
    <!-- <ul>
      <li><router-link to='/'>首页</router-link></li>
      <li><router-link :to="{name:'home'}">首页</router-link></li>
      <li><router-link to='/detail'>详情页</router-link></li>
      <li><router-link :to="{name:'detail',params:{id:3}}">详情页</router-link></li>
      <li><router-link :to="{name:'login'}">登录页</router-link></li>
    </ul> -->
    <!-- 使用<router-view/>渲染匹配到的组件 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
ul li{
  list-style: none;
  /* text-decoration: none */
}
*{
  padding: 0;
  margin: 0;
}
</style>
