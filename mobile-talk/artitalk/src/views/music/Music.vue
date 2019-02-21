<template>
    <div>
        <h1>音乐</h1>
        <aplayer v-if="isShow" :music="musicList[0]" :list = "musicList" :showLrc="true"/>

    </div>    
</template>
<script>
import axios from 'axios'
import Aplayer from 'vue-aplayer'
export default {
    components:{
        Aplayer
    },
    data(){
        return{
            musicList:[],
            isShow:false,
        }
    },
    created(){
        let obj = {
            title:'音乐',
            className:'music'
        };
        this.$emit("changNav",obj);
        this.getData();
    },
    methods:{
        getData(){
            axios.get('./data/musicdata.json')
            .then((res) => {
                let arr = res.data.musicData;
                arr.forEach((element,index) => {
                arr[index].lrc=location.origin+location.pathname+element.lrc
                });
                this.musicList = arr;
                this.isShow = true
                
            })
        }
    }
}
</script>