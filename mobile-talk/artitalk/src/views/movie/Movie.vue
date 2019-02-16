<template>
<div>
    <ul>
        <li v-for="(item,index) in dataList" :key="index" class="item-list clearfix">
            <div class="item-left">
                <img :src="item.cover.url" alt="">
            </div>
            <div class="item-right">
                <h4>{{item.title}}</h4>
                <span v-for="(item,index) in item.actors" :key="index">{{item}}/</span>
                <br>
                <span>{{item.year}}年</span>
            </div>
        </li>
    </ul>
   <div class="loading" v-show="!isLoading">
       <div class="loading-content">
           <img src="../../assets/img/loading.gif" alt="">
       </div>       
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            dataList:[],
            listStart:0,
            isLoading:true
        }
    },
    created(){
        this.getData();
    },
    mounted(){
        window.onscroll =()=>{
            let clientHight = document.documentElement.clientHeight; //可视区域高度
            let scrollTop = document.documentElement.scrollTop;//当前滚动条已滚动高度
            let scrollHeight = document.documentElement.scrollHeight;//滚动条总高度
            if(clientHight+scrollTop >= scrollHeight-10 &&this.isLoading){
                this.listStart += 10;
                this.getData();
            }
            // console.log(clientHight,scrollTop,scrollHeight);
            
        }
    },
    methods:{
        getData(){
            this.isLoading = false;
            let proxy = 'https://bird.ioliu.cn/v2?url=';
            let url = `https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=${this.listStart}&count=10`;
            axios.get(proxy+url)
            .then((res) =>{
                console.log(res.data.subject_collection_items);
                console.log(this.listStart);
                this.dataList = this.dataList.concat(res.data.subject_collection_items);
                this.isLoading = true;
            })
            .catch((res) => {
                console.log('失败');
            })
        }
    }
}
</script>
<style scoped>
ul{
    padding:10px;
}
.item-list{
    width: 100%;
    border-bottom: 1px solid #333;
    padding: 20px 0;
}
.item-list .item-left{
    width: 40%;
    float: left;
}
.item-list img{
    width:80%;
}
.item-list .item-right{
    width: 55%;
    padding-left: 5%;
    float: right;
}
.loading{
    background:rgba(0,0,0,0.3);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.loading-content{
    background: rgba(255,255,255,.6);
    width: 150px;
    height: 150px;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -75px;
    margin-left: -75px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

