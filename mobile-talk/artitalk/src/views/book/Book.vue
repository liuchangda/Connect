<template>    
    <div>
        <h1>书籍</h1>
        <swipe :speed="300" class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
    </div>
</template>
<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
    components:{
        'swipe':Swipe,
        'swipe-item':SwipeItem,
    },
    created(){
        let obj = {
            title:'书籍',
            className:'book'
        };
        this.$emit("changNav",obj);
    }
}
</script>
<style>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background:url('../../assets/img/01.jpg');
  color: #fff;
}

.slide2 {
  background:url('../../assets/img/02.jpg');
  color: #000;
}

.slide3 {
  background:url('../../assets/img/03.jpg');
  color: #fff;
}
</style>
