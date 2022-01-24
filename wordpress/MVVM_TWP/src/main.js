
//为了方便调用store,在main.js里引入store,这样就可以通过this.$store来调用了
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'  //导入Vuex数据仓储对象
import api from '@/api'
// import api from '@/api/mock.js'

createApp(App).use(store).use(router).mount('#app') //注册数据仓储对象  app.use(store)

// api.getCards()
//     .then(cards => console.log('getCards.then', cards))
//     .catch(error => console.log('getCards.catch', error))

// api.updateCard({ id: 2, title: "update title" })
//     .then(cards => console.log('updateCard.then', cards))
//     .catch(error => console.log('updateCard.catch', error))

// api.getCategories()
// .then(cards => console.log('getCategories.then', cards))
// .catch(error => console.log('getCategories.catch', error))

// api.getComments()
// .then(cards => console.log('getComments.then', cards))
// .catch(error => console.log('getComments.catch', error))
