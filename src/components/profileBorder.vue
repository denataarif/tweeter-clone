<template lang="">
    <div>
        <img :src="url" class='rounded-full' :style = "{ width: scale + 'px', height: scale + 'px'}"/>
    </div>
</template>
<script>
export default {
    props:{
        url: String,
        scale: String
    }
}
</script>
<style lang="">
    
</style>