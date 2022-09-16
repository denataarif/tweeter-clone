<script>
  import Navbar from './components/Navbar.vue'
  import { computed } from '@vue/reactivity';
  import Imgurl from './assets/Img/agung-setiawan-15SPtahBNPE-unsplash.jpg'
  import tweetForm from './components/tweetForm.vue';
  import tweetCard from './components/tweetCard.vue';

  export default{
    components:{Navbar, tweetForm, tweetCard},
    
    data(){
      return{
        profile:{
          fullName:'Denata Arif Nur Muhamad',
          userName:"@denataarif",
          profileImg: Imgurl,
        },
        user:[
          {
            id: 1,
            fullName:'Molly Hudson',
            userName:'@mhudson',
            tweet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptatum mollitia repellendus eum voluptates, ex hic nihil doloribus, totam atque possimus recusandae maiores nemo, accusantium vitae eos assumenda voluptas distinctio?'
          },
          {
            id: 2,
            fullName:'Jhon doe',
            userName:'@JhonD',
            tweet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptatum mollitia repellendus eum voluptates, ex hic nihil doloribus, totam atque possimus recusandae maiores nemo, accusantium vitae eos assumenda voluptas distinctio?',
          },
        ]
          
      }
   },

   provide(){
    return{
      profile : this.profile,
      fullName : this.profile.fullName,
      userName : this.profile.userName,
      profileImg : this.profile.profileImg
    }
   },
  }
</script>

<template>
  <div class="">
    <Navbar />
  </div>
    <div class="m-4">
      <tweetForm/>
      <h2 class="font-bold">Feeds</h2>
      <tweetCard 
        v-for="tweet in user" :key="tweet.id" v-bind="tweet"
      />
    </div>
</template>

<style>
  @import "./style.css";
</style>
