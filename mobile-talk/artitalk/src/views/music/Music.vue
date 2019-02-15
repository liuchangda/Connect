<template>
    <h1>音乐</h1>
</template>
<script>
export default {   
    created(){
        let obj = {
            title:'音乐',
            className:'music'
        };
        this.$emit("changNav",obj);
    }
}
</script>