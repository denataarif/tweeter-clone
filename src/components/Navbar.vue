<template lang="">
    <div class=" bg-green-800 fixed top-0 right-0 left-0 z-10 ">
        <div class="flex justify-between p-3 mx-auto container max-w-3xl text-white">
            <div class="left">
                <h2 class="text-lg font-bold">Simple Twitter Clone with Vue</h2>
            </div>
            <div class="right flex justify-between">
                <div class="name pr-2">
                    <p class="font-bold">{{fullName}}</p>
                    <p class=" font-bold">{{userName}}</p>
                </div>
                <div class="profilePicture">
                    <profileBorder :url="profileImg" scale='40'/>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import profileBorder from "./profileBorder.vue"
export default {
    components:{
        profileBorder,
    },
    inject:['fullName', 'userName', 'profileImg'],

}
</script>
<style lang="">
    
</style>