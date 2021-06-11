<template>
  <div id="app">
      <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="home">{{$t('home')}}</el-menu-item>
      <el-menu-item index="income">{{$t('income')}}</el-menu-item>
      <el-menu-item index="expend">{{$t('expend')}}</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'my-project',
     data() {
      return {
        activeIndex2: 'home'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$router.push({name:key})
      }
    }
  }
</script>

<style>
  /* CSS */
  *{
    padding:0;
  }
  body{
    margin:0;
  }
</style>
