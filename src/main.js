import { createApp, provide } from 'vue'
import App from './App.vue'

import Imgurl from './assets/Img/agung-setiawan-15SPtahBNPE-unsplash.jpg'
import tweetForm from './components/tweetForm.vue';
import tweetCard from './components/tweetCard.vue';
import Navbar from './components/Navbar.vue'

const app = createApp(App)

app
    .component('tweetForm', tweetForm)
    .component('tweetCard', tweetCard)
    .component('Navbar', Navbar)
app.mount('#app')
