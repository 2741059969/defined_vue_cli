<template>
  <div class="app-title">
   根组件~~~~{{ num }}
   <router-link to="/home">去首页</router-link>
   <router-link to="/about">去关于</router-link>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num:100
    }
  }
}
</script>

<style>
.app-title{
  color: red;
  font-size: 33px;
}
</style>