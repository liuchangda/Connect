<template>
    <h1>聊天</h1>
</template>
<script>
export default {
      created(){
        let obj = {
            title:'聊天',
            className:'talk'
        };
        this.$emit("changNav",obj);
    }
}

</script>