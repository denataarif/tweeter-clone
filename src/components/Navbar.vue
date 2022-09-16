<template lang="">
    <div class="flex justify-between p-3 bg-green-800">
        <div class="left">
            <h2 class="text-lg font-bold">Simple Twitter Clone with Vue</h2>
        </div>
        <div class="right flex justify-between">
            <div class="name pr-2">
                <p class="font-bold">{{fullName}}</p>
                <p class="text-green-500 font-bold">{{userName}}</p>
            </div>
            <div class="profilePicture">
                <profileBorder :url="profilePict" scale='40'/>
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
    data(){
        return{
            profilePict: this.profileImg,
        }
    }
}
</script>
<style lang="">
    
</style>