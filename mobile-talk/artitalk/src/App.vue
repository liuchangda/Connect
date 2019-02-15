<template>
  <div id="app">
    <Navigations :navVal="activeNav"/>
    <router-view @changNav="change"/>
  </div>
</template>
<script>
import Navigations from '@/components/Navigations.vue';
export default {
  components:{
    Navigations
  },
  methods:{
    change(obj){
      this.activeNav.title = obj.title;
      this.activeNav.className = obj.className;
    }
  },
  data(){
    return{
      activeNav:{
        title:'电影',
        className:'movie'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  padding: 1rem 0;
}


</style>
