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
            fullName:'Molly Hudson',
            userName:'@mhudson',
            tweet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptatum mollitia repellendus eum voluptates, ex hic nihil doloribus, totam atque possimus recusandae maiores nemo, accusantium vitae eos assumenda voluptas distinctio?',
            likes: 10,
            love: 'false',
            retweet: 0,
            showInput : false,
            reply : [
            {
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
            fullName:'Jhon doe',
            userName:'@JhonD',
            tweet: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptatum mollitia repellendus eum voluptates, ex hic nihil doloribus, totam atque possimus recusandae maiores nemo, accusantium vitae eos assumenda voluptas distinctio?',
            likes: 22,
            love: "false",
            retweet:1,
            showInput:false,
            reply:[
            {
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
        avatar: this.profile.profileImg,
        fullName: this.profile.fullName,
        userName: this.profile.userName,
        likes: this.profile.likes,
        love: "false",
        retweet: this.profile.retweet,
        tweet: data,
        reply: []
      })
    },

    commentHandle(data,index){
      console.log(index)
      this.user[index].reply.push({
        fullName: this.profile.fullName,
        userName: this.profile.userName,
        tweet: data,
        love:"false",
        like: 0,
        retweet: 0,
      })
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
    <div class="m-4">
      <tweetForm @addNewTweet="addNewTweet"/>
      <h2 class="font-bold">Feeds</h2>

      <tweetCard 
        @comment="commentHandle"
        v-for="(feeds, index) in this.user"
        :feeds="feeds"
        :index="index"
      />
    </div>
</template>

<style>
  @import "./style.css";
</style>
