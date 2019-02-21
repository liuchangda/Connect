<template>
    <div>
      {{movieInfo.title}}
    </div>
    
</template>
<script>
import axios from 'axios'
export default {  
    data(){
        return{
          movieInfo:{},  
        }        
    },  
    created(){
            this.getData();
    },
    methods:{    
        getData(){
        let API = 'https://bird.ioliu.cn/v2?url=';
        let url = `https://api.douban.com/v2/movie/subject/${this.$route.params.movieId}`;
        axios.get(API+url)
        .then((res) => {
            this.movieInfo = res.data;
            console.log(res);            
        })
        .catch((res) => {
            console.log(error);            
        })
    }
    },    
}
</script>
