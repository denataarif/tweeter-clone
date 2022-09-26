<script>
  // import Navbar from './components/Navbar.vue'
  import { computed } from '@vue/reactivity';
  import Imgurl from './assets/Img/agung-setiawan-15SPtahBNPE-unsplash.jpg'
  // import tweetForm from './components/tweetForm.vue';
  // import tweetCard from './components/tweetCard.vue';

  export default{
    // components:{ Navbar, tweetForm, tweetCard,  },
    
    data(){
      return{
        profile:{
          fullName:'Denata Arif Nur Muhamad',
          userName:"@denataarif",
          profileImg: Imgurl,
          likes: 0,
          retweet: 0,
        },
        user:[
          {
            id: 1,
            profilePict:'https://image.shutterstock.com/image-photo/beautiful-young-woman-preparing-vegetable-600w-1578848548.jpg',
            fullName:'Molly Hudson',
            userName:'@mhudson',
            tweet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptatum mollitia repellendus eum voluptates, ex hic nihil doloribus, totam atque possimus recusandae maiores nemo, accusantium vitae eos assumenda voluptas distinctio?',
            likes: 10,
            love: 'false',
            retweet: 0,
            showInput : false,
            reply : [
            {
              id: 0,
              profilePict:'https://i.pinimg.com/564x/84/cc/89/84cc89a411fae8a25a65e9965682ccc7.jpg',
              fullName:'Rimuru',
              userName:'@rimuru',
              tweet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
              retweet: 1,
              likes: 3,
              love: "false"
              }
            ]

            ,
          },
          {
            id: 2,
            profilePict:'https://i.pinimg.com/564x/7d/8f/7c/7d8f7c20908e6d41e3ac5be645af574e.jpg',
            fullName:'Jhon doe',
            userName:'@JhonD',
            tweet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptatum mollitia repellendus eum voluptates, ex hic nihil doloribus, totam atque possimus recusandae maiores nemo, accusantium vitae eos assumenda voluptas distinctio?',
            likes: 22,
            love: "false",
            retweet:1,
            showInput:false,
            reply:[
            {
              id: 0,
              profilePict:'https://i.pinimg.com/564x/cc/f3/89/ccf389423b7701443495de4f12014e03.jpg',
              fullName:'Kuuga',
              userName:'@Kg',
              tweet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
              retweet: 2,
              likes: 10,
              love: "false"
              }
            ]
          
          },
        ],
      }
    },
   provide(){
    return{
      profile : this.profile,
      fullName : this.profile.fullName,
      userName : this.profile.userName,
      profileImg : this.profile.profileImg,
    }
   },
   methods:{
    addNewTweet(data){
      this.user.unshift({
        id:this.maxId + 1,
        profilePict: this.profile.profileImg,
        fullName: this.profile.fullName,
        userName: this.profile.userName,
        likes: this.profile.likes,
        love: "false",
        retweet: this.profile.retweet,
        tweet: data,
        delete: true,
        reply: []
      })
    },



    deleteHandle(data){
      const filterArray = this.user.filter(value => value.id !== data)
      this.user = filterArray
    },

   },
   computed:{
    maxId(){
      const maxId = this.user.map(x => x.id)
      const findMax = Math.max(...maxId)
      return findMax
    },

   }

  }
</script>

<template>
  <div class="">
    <Navbar />
  </div>
    <div class="mt-20 mx-auto container max-w-3xl">
      <tweetForm @addNewTweet="addNewTweet"/>
      <h2 class="font-bold">Feeds</h2>

      <tweetCard 
        @deleteHandle="deleteHandle"
        v-for="(feeds, index) in this.user"
        :feeds="feeds"
        :index="index"
      />
    </div>
</template>

<style>
  @import "./style.css";
</style>
