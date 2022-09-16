<template lang="">
    <div>
        <div class="flex justify-between mt-4">
            <div class="avatar m-1">
                <profileBorder :url="Imgurl1" scale='40'/>
            </div>
            <div class="content">
                <div class="profile-name">
                    <span>{{this.fullName}}</span> <span>{{this.userName}}</span>
                </div>
                <div class="tweet">
                    <p>{{this.tweet}}</p>
                </div>
                <div class="button">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import profileBorder from './profileBorder.vue';
    import Imgurl1 from '../assets/Img/a52be707-bbec-4945-9f9c-a1245ecaa8d9.jpg'

export default {
    components:{
        profileBorder,
    },
    props:{
        id: Number,
        fullName: String,
        userName: String,
        tweet: String,
    },
    data(){
        return{
            Imgurl1,
        }
    }
}
</script>
<style lang="">
    
</style>