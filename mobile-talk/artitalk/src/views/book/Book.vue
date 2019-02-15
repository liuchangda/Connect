<template>
    <h1>书籍</h1>
</template>
<script>
export default {
    created(){
        let obj = {
            title:'书籍',
            className:'book'
        };
        this.$emit("changNav",obj);
    }
}
</script>