<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld @addChildren="add" msg="Welcome to Your Vue.js App"/>
    <h1>{{num}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return{
      num:0
    }
  },
  components: {
    HelloWorld
  },
  methods:{
    add(step){
      this.num+=step
    }
  }
}
</script>
