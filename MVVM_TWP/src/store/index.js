import { createStore } from 'vuex'

// const http = new HttpClient("http://localhost:8888/wordpress/wp-json/wp/v2", "dHdwOjFPI0Bkb05BbkVkRUwmUGhFYQ==")
const urlStr = "http://wordpress.localhost/wp-json/wp/v2/"

export default createStore({
  state: {
    lists: [],
    list: {},
    cards: [],
    card: {},
    comments: [],
    comment: {},
    colorList: "rgb(255, 215, 166)",
    colorCard: "rgba(219, 254, 255, 0.6)",
    colorComment: "rgba(219, 254, 255, 0.6)",
    username: "",
  },
  mutations: {
    setUsername(state, username) { state.username = username },
    setLists(state, lists) { state.lists = lists }, // wordpress(categories) = store(lists)
    setList(state, list) { state.list = list }, // wordpress(categories) = store(lists)
    setCards(state, cards) { state.cards = cards }, // wordpress(posts) = store(cards)
    setCard(state, card) { state.card = card }, // wordpress(posts) = store(cards)
    setComments(state, comments) { state.comments = comments }, // wordpress(comments) = store(comments)
    setComment(state, comment) { state.comment = comment }, // wordpress(comments) = store(comments)
    setColorList(state, rgb) { state.colorList = rgb },
    setColorCard(state, rgb) { state.colorCard = rgb },
    setColorComment(state, rgb) { state.colorComment = rgb },
  },
  getters: {
    getUsername: state => { return state.username; }
  },
  actions: {
    /*
          GET ALL
    */
    getLists({ commit }) { // wordpress(categories) = store(lists)
      fetch(urlStr + "categories/", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then((result) => {
        result.json().then((data) => {
          console.log("getLists[]: Success 200")
          console.log(data)
          commit('setLists', data)
        })
      });
    },
    getCards({ commit }) { // wordpress(posts) = store(cards)
      fetch(urlStr + "posts/", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then((result) => {
        result.json().then((data) => {
          console.log("getCards[]: Success 200")
          console.log(data)
          commit('setCards', data)
        })
      });
    },
    getComments({ commit }) { // wordpress(comments) = store(comments)
      fetch(urlStr + "comments/", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then((result) => {
        result.json().then((data) => {
          console.log("getComments[]: Success 200")
          console.log(data)
          commit('setComments', data)
        })
      });
    },
    /*
          GET
    */
    getList({ commit }, id) { // wordpress(categories) = store(lists)
      fetch(urlStr + `categories/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        res.json().then((data) => {
          console.log("getList: Success 200")
          console.log(data)
          commit('setList', data.category)
        })
      })
    },
    getCard({ commit }, id) { // wordpress(posts) = store(cards)
      fetch(urlStr + `posts/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', },
      }).then((res) => {
        res.json().then((data) => {
          console.log("getCard: Success 200")
          console.log(data)
          commit('setCard', data.post)
        })
      })
    },
    getComment({ commit }, id) { // wordpress(comments) = store(comments)
      fetch(urlStr + `comments/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', },
      }).then((res) => {
        res.json().then((data) => {
          console.log("getComment: Success 200")
          console.log(data)
          commit('setComment', data.comment)
        })
      })
    },
    /*
          DELETE
    */
    deleteList({ dispatch }, id) { // wordpress(categories) = store(lists)
      fetch(urlStr + `categories/${id}` + '?force=true', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}`},
      }).then((res) => {
        if (res.status == 200) {
          console.log("deleteList: " + id)
          dispatch('getLists')
        } else {
          res.json().then((data) => {
            console.log("deleteList: " + data.error.message)
          })
        }
      })
    },
    deleteCard({ dispatch }, id) { // wordpress(posts) = store(cards)
      fetch(urlStr + `posts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}`},
      }).then((res) => {
        if (res.status == 200) {
          console.log("deleteCard: " + id)
          dispatch('getCards')
        }
      })
    },
    deleteComment({ dispatch }, id) { // wordpress(comments) = store(comments)
      fetch(urlStr + `comments/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}`},
      }).then((res) => {
        if (res.status == 200) {
          console.log("deleteComment: " + id)
          dispatch('getComments')
        }
      })
    },
    /*
          ADD
    */
    addList({ dispatch }, newName) {
      fetch(urlStr + "categories/", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}`},
        body: JSON.stringify({ name: newName }),
      }).then((res) => {
        if (res.ok) {
          console.log("addList (" + newName + "): Success 201")
          dispatch('getLists')
        }
      })
    },
    addCard({ dispatch }, obj) {
      fetch(urlStr + "posts/", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}`},
        body: JSON.stringify({ title: obj.name, content: obj.name, categories: obj.idParent, status: 'publish' }),
      }).then((res) => {
        if (res.ok) {
          console.log("addCard (" + obj.name + "): Success 201")
          dispatch('getCards')
        } else {
          res.json().then((data) => {
            console.log(data.error.message)
          })
        }
      })
    },
    addComment({ dispatch }, obj) {
      fetch(urlStr + "comments/", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}`},
        body: JSON.stringify({ content: obj.content, post: obj.idParent, status: 'publish' }),
      }).then((res) => {
        if (res.ok) {
          console.log("addComment (" + obj.content + "): Success 201")
          dispatch('getComments')
        } else {
          res.json().then((data) => {
            console.log(data.error.message)
          })
        }
      })
    },
    /*
          UPDATE
    */
    updateList({ dispatch }, obj) {
      fetch(urlStr + `categories/${obj.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}`},
        body: JSON.stringify({ name: obj.name }),
      }).then((res) => {
        if (res.ok) {
          console.log("updateList: " + obj.id + " name=" + obj.name)
          dispatch('getLists')
          // this.$router.push('/')
        }
        // else {
        //   res.json().then((data) => {
        //     console.log(data.error.message)
        //   })
        // }
      })
    },
    updateCard({ dispatch }, obj) {
      fetch(urlStr + `posts/${obj.idCard}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}`},
        body: JSON.stringify({ title: obj.name, content: obj.name, categories: obj.idParent, status: 'publish' }),
      }).then((res) => {
        if (res.ok) {
          console.log("updatePost=" + obj.idCard + " name=" + obj.name + " list="+obj.idParent)
          dispatch('getCards')
        }
      })
    },
    updateComment({ dispatch }, obj) {
      fetch(urlStr + `comments/${obj.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}`},
        body: JSON.stringify({ content: obj.content, status: 'publish' }),
      }).then((res) => {
        if (res.ok) {
          console.log("updateComment: " + obj.id + " name=" + obj.content)
          dispatch('getComments')
        }
      })
    }
  },
})

// import Vue from 'vue'
// import Vuex from 'vuex'
// // import api from '@/api' //找到api这个文档时，一定是先进入index.js
// import api from '@/api/mock.js'

// const store = new Vuex.Store({
//   state: {
//     listElements: [
//       {
//         id: "0",
//         name: "list" + 0,
//       },
//     ],
//   },

//   mutations: {
//     setCategories(state, categories) {
//       console.log('setCategories', categories)
//       state.listElements = categories.filter(category => category.id != 1)
//     },
//     setComments(state, comments) {
//       console.log('setComments', comments)
//       // state.listElements = 
//     },
//     setCards(state, cards) {
//       state.listCards = cards //在state里存入listCards,它的值是cards
//     }
//   },

//   actions: {
//     // functionName(context)
//     // context we can do destructuring, which means using only what we nee from context
//     // if we need only context.commit destructuring is written as following {commit}
//     loadList({ commit }) {
//       api.getCategories().then(categories => commit("setCategories", categories))
//     },
//     loadCards({ commit }) {
//       api.getCards().then(cards => commit("setCards", cards))
//     },
//     deleteCard({ commit, state }, cardToDelete) {
//       api.deleteCard(cardToDelete.id).then(() => {
//         var cards = state.cards.filter(card => card.id != cardToDelete.id)
//         commit("setCards", cards)
//       })
//     },
//     moveCard({ commit, state }, cardToMove, categoryId) {
//       cardToMove.categoryId = categoryId
//       api.updateCard(cardToMove).then(card => {

//       })
//     },
//   }
// })

// //导出
// export default store
