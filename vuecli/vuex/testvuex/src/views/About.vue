<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <h2>{{$store.state.count}}</h2> -->
    <h2>{{count}}</h2>
    <h3>{{count1}}</h3>
    <button @click="add(10)">add</button>
    <button @click="addActions">addActions</button>
  </div>
</template>
<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  // methods:{
  //   add(){
  //     this.$store.state.count++
  //   }
  // }

  // methods:{
  //   add(){
  //     this.$store.commit("add",10);
  //   }
  // },

   methods:{
     ...mapMutations(['add']),//参数写在上面
     ...mapActions(['addActions'])
   },
   


  // computed:{
  //   computedCount(){
  //     return this.$store.state.count
  //   }
  // }
  
  // computed:mapState({
  //   computedCount:state => state.count
  // }),

  computed:{
    ...mapState(['count']),
    ...mapGetters(['count1'])
  }

 

}


</script>
