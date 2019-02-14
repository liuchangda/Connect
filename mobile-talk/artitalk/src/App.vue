<template>
  <div id="app">
    <Navigations/>
    <router-view/>
  </div>
</template>
<script>
import Navigations from '@/components/Navigations.vue';
export default {
  components:{
    Navigations
  },

}
</script>

<style>



</style>
