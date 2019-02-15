<template>
  <div :class="activeClass">
    <header>
      <span @click="routerPush(btnList[0])">首页</span>
      <h1>{{activeTitle}}</h1>
    </header>
    <nav>
      <ul>
         <li :class="{'active':item.className==activeClass}" @click="routerPush(item)" v-for="(item,index) in btnList" :key="index">{{item.name}}</li>
      </ul>
     
    </nav>
  </div>
</template>

<script>
export default {
 
  data(){     
    return{
      activeTitle:"电影",
      activeClass:"movie",
      btnList:[
      {
        name:"电影",
        routerPath:"/",
        className:'movie'
      },
      {
        name:"音乐",
        routerPath:"/music",
        className:'music'
      },
      {
        name:"书籍",
        routerPath:"/book",
        className:'book'
      },
      {
        name:"聊天",
        routerPath:"/talk",
        className:'talk'
      }
    ]}
  },
  methods:{
    routerPush(obj){
      this.activeTitle = obj.name;
      this.activeClass = obj.className;
      this.$router.push(obj.routerPath);    
    }
  },
  props:['navVal'],
  computed:{
    propsVal(){
      return this.navVal.title;
    }
  },
  watch:{
    propsVal(){
      this.activeTitle = this.navVal.title;
      this.activeClass = this.navVal.className;
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li{
    list-style: none;
  }
  header,nav{
    color: #fff;
    width: 100%;
    height: 1rem;
    background: rgb(33, 150, 243);
    position: fixed;
  }
  header{
    top: 0;
  }
  header span{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
  }
  nav{
    bottom: 0;
    
  }
  nav ul{
    width: 100%;
  }
  nav li{
    width: 25%;
    float: left;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
  }
  nav li.active{
    font-size: 16px;
    font-weight: bolder;
  }
  .movie header,.movie nav{
    background-color: rgb(33, 150, 243);
  }
  .music header,.music nav{
    background-color: rgb(0, 150, 136);
  }
  .book header,.book nav{
    background-color: rgb(121, 85, 72);
  }
  .talk header,.talk nav{
    background-color: rgb(63, 81, 181);
  }
  h1{
      text-align: center;
  }
</style>
