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
    
   
</div>

</template>
<script>
export default {
    data(){
        return {
            dataList:[],
            listStart:0,
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
            if(clientHight+scrollTop >= scrollHeight-10){
                this.listStart += 10;
                this.getData();
            }
            console.log(clientHight,scrollTop,scrollHeight);
            
        }
    },
    methods:{
        getData(){
            let proxy = 'https://bird.ioliu.cn/v2?url=';
            let url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=${this.listStart}&count=10';
            axios.get(proxy+url)
            .then((res) =>{
                console.log(res.data.subject_collection_items);
                console.log(this.listStart);
                this.dataList = res.data.subject_collection_items;
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
</style>

