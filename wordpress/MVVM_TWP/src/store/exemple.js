
// import { createStore } from 'vuex'

//    http://wordpress.localhost/wp-json/wp/v2/
//      ACCES A L'API

// export default createStore({
//   state: {
//     categories: [],
//     category: {
//       id: Number,
//       name: String
//     },
//     posts: [],
//     postscat: [],
//     post: {
//       title: Object,
//       _id: String,
//       id: Number,
//       author_name: String,
//       date: String,
//       content: Object,
//       post: Number,
//     },
//     comments: [],
//     comment: {}
//   },
//   mutations: {
//     setCategories(state, categories) {
//       state.categories = categories
//     },
//     setCategory(state, category) {
//       state.category = category
//     },
//     setPosts(state, posts) {
//       state.posts = posts
//     },
//     setPostscat(state, postscat) {
//       state.postscat = postscat
//     },
//     setPost(state, post) {
//       state.post = post
//     },
//     setComments(state, comments) {
//       state.comments = comments
//     },
//     setComment(state, comment) {
//       state.comment = comment
//     }
//   },
//   actions: {

//     getCategories({ commit }) {
//       const url = "http://wordpress.localhost/wp-json/wp/v2/categories/";
//       fetch(url, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' }
//       })
//         .then((result) => {
//           result.json().then((data) => {
//             console.log(data)
//             commit('setCategories', data)
//           })
//         });
//     },

//     getCategory({ commit }, id) {
//       const url = `http://wordpress.localhost/wp-json/wp/v2/categories/${id}`;
//       fetch(url, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' }
//       })
//         .then((result) => {
//           result.json().then((data) => {
//             commit('setCategory', data)
//           })
//         })
//     },

//     getComments({ commit }) {
//       const url = 'http://wordpress.localhost/wp-json/wp/v2/comments/'

//       fetch(url, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' }
//       }).then((res) => {
//         res.json().then((data) => {
//           console.log('dans getComments')
//           console.log(data)
//           commit('setComments', data) // fetch les donnees sur l'api et
//           // modifie l'etat du store avec les nouvelles donnees
//         })
//       })
//     },
//     getComment({ commit }, id) {
//       const url = `http://wordpress.localhost/wp-json/wp/v2/comments/${id}`

//       fetch(url, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' }
//       }).then((res) => {
//         res.json().then((data) => {
//           console.log('dans getComment')
//           console.log(data)

//           commit('setComments', data) // fetch les donnees sur l'api et
//           // modifie l'etat du store avec les nouvelles donnees
//         })
//       })
//     },
//     getPosts({ commit }) {
//       const url = 'http://wordpress.localhost/wp-json/wp/v2/posts?per_page=100'

//       fetch(url, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' }
//       }).then((res) => {
//         res.json().then((data) => {
//           console.log('dans getPosts')
//           console.log(data)
//           commit('setPosts', data) // fetch les donnees sur l'api et
//           // modifie l'etat du store avec les nouvelles donnees
//         })
//       })
//     },

//     getPostscat({ commit }, idcat) {
//       const url = 'http://wordpress.localhost/wp-json/wp/v2/posts?per_page=100'

//       fetch(url, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' }
//       }).then((res) => {
//         res.json().then((data) => {

//           function filtreParCat(obj) {
//             if (obj.categories == idcat) {
//               return true;
//             } else {
//               return false;
//             }
//           }
//           var dataCat = data.filter(filtreParCat)

//           console.log('dans getPostscat')
//           console.log(dataCat)
//           commit('setPostscat', dataCat) // fetch les donnees sur l'api et
//           // modifie l'etat du store avec les nouvelles donnees
//         })
//       })
//     },



//     getPost({ commit }, id) {
//       const url = `http://wordpress.localhost/wp-json/wp/v2/posts/${id}`

//       fetch(url, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' }
//       }).then((res) => {
//         res.json().then((data) => {
//           console.log('dans getPost')
//           console.log(data)
//           commit('setPost', data) // fetch les donnees sur l'api et
//           // modifie l'etat du store avec les nouvelles donnees
//         })
//       })
//     },


//     goDeleteCategory({ dispatch }, id) {

//       console.log(id);


//       const url = `http://wordpress.localhost/wp-json/wp/v2/categories/${id}` + '?force=true'

//       fetch(url, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json", accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}`,
//         },
//       })

//         .then((result) => {
//           if (result.status == 200) {
//             dispatch("getCategories")
//             this.message = "Catégorie supprimée"
//           } else {
//             result.json().then((data) => {
//               //console.log(this.message);
//               setTimeout(() => {
//               }, 3000);
//             });
//           }
//         });
//     },


//     goDeletePost({ dispatch }, id) {
//       console.log(id);
//       const url = `http://wordpress.localhost/wp-json/wp/v2/posts/${id}`

//       fetch(url, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json", accept: 'application/json', Authorization: `Bearer ${localStorage.getItem('jwt')}`,
//         },
//       })
//         .then((result) => {
//           if (result.status == 200) {
//             dispatch("getPosts")
//             this.message = "Post supprimé"
//           } else {
//             result.json().then((data) => {
//               //console.log(this.message);
//               setTimeout(() => {
//               }, 3000);
//             });
//           }
//         });
//     },

//   },



//   getters: {
//     getPostsByCategoryId: (state) => (catId) => {
//       // console.log("getPostsByCategoryId:", catId)
//       return state.posts.filter(post => post.categories[0] === catId)
//     },

//     getCommentByPostId: (state) => (postId) => {
//       // console.log("getPostsByCategoryId:", catId)
//       return state.comments.filter(comment => comment.post[0] === postId)
//     },


//   }

// })
