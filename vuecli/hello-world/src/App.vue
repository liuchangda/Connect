<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/mine">我的</router-link> |
      <router-link to="/test">子路由</router-link> |
      <router-link :to="{name:'test1',params:{name:'zs',age:29}}">子路由1</router-link> |
      <router-link to="/test2">子路由2</router-link> |
      <router-link to="/testurl/5/ls">测试url传参</router-link> |
      <router-link to="/home">返回首页</router-link> |
      <router-link to="/redirectparam/7/ww">redirectparam</router-link> |
      <router-link to="/abc">alias</router-link> |
      <!-- <p>{{$router.name}}</p> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
