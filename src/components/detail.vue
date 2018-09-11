<template>
    <div>
        <h2>详情页</h2>
        <!-- 获取动态路由传过来的值：$route.params.id -->
        <h3>动态路由参数：{{$route.params.id}}</h3>
    </div>
</template>

<script>
    export default {
        name:'detail',
        // 在方法内获取动态路由参数时，需要加上this
        created() {
            console.log(this.$route.params.id)            
        },
    }
</script>

<style scoped>

</style>