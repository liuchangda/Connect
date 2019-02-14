<template>
  <div class="hello">
    <header>
      <span>首页</span>
      <h1>电影</h1>
    </header>
    <nav>
      <li v-for="(item,index) in btnList" :key="index">{{item.name}}</li>
    </nav>
  </div>
</template>

<script>
export default {

  data(){
    return{
      btnList:[
      {
        name:"电影",
        routerPath:"/",

      },
      {
        name:"音乐",
        routerPath:"/music",
      },
      {
        name:"书籍",
        routerPath:"/book",
      },
      {
        name:"聊天",
        routerPath:"/talk",
      }

    ]}
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
  }
  nav{
    bottom: 0;
    
  }
</style>
