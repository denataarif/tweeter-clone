<template lang="">
    <div>
        <div class="flex mt-4">
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
                <div class="button flex">
                    <div class="flex mr-1">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        width="24" 
                        height="24">
                        <path fill="none" d="M0 0H24V24H0z"/><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"/></svg>
                        <span>{{this.likes}}</span>
                    </div>
                    <div class="flex">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            width="24" 
                            height="24"
                            @click.prevent="pushNewRetweet"
                        >
                            <path fill="none" d="M0 0h24v24H0z"/><path d="M6 4h15a1 1 0 0 1 1 1v7h-2V6H6v3L1 5l5-4v3zm12 16H3a1 1 0 0 1-1-1v-7h2v6h14v-3l5 4-5 4v-3z"/></svg>
                        <span>{{this.retweet}}</span>
                    </div>
                </div>
                <div class="reply" @click.prevent="FormHandle()" @showCancelButton="showCancelButton">
                    <p>reply</p>
                    <keep-alive>
                        <tweetForm v-if="showComponent" />
                    </keep-alive>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import profileBorder from './profileBorder.vue';
    import Imgurl1 from '../assets/Img/a52be707-bbec-4945-9f9c-a1245ecaa8d9.jpg'
    import tweetForm from './tweetForm.vue';
export default {
    components:{
        profileBorder, tweetForm
    },
    props:{
        id: Number,
        fullName: String,
        userName: String,
        tweet: String,
        likes: Number,
        retweet: Number,
        buttonCancel: Boolean,
    },
    data(){
        return{
            Imgurl1,
            showComponent : false
        }
    },
    computed:{
        pushNewRetweet(){
            this.$emit('retweetHandle', this.$props.retweet.valueOf())
            console.log(this.$props.retweet.valueOf())
        }
    },
    methods:{
        likesHandle(){
            
        },
        FormHandle(){
            this.showComponent = !this.showComponent
        },
        showCancelButton(){
            this.buttonCancel = true
        }
    }
}
</script>
<style lang="">
    
</style>