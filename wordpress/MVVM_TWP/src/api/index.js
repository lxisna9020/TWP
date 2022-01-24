import HttpClient from '@/api/http'

const http = new HttpClient("http://wordpress.localhost/wp-json/wp/v2", "dHdwOjFPI0Bkb05BbkVkRUwmUGhFYQ==")
// const http = new HttpClient("http://localhost:8888/wordpress/wp-json/wp/v2", "dHdwOjFPI0Bkb05BbkVkRUwmUGhFYQ==")

//拥有所有的.需要调用的api地址，这些api地址可以从接口文档获取或者从其他任何能获取的地方获取
export default {
    //#region CATEGORIES
    name: 'api',
    getCategories() {
        return http.get('/categories/')
    },

    getCategorie(id) {
        return http.get('/categories/' + id)
    },

    updateCategorie(category) {
        return http.put('/categories/' + category.id, category)
    },

    deleteCategorie(id) {
        return http.delete('/categories/' + id + "?force=true")  //query parameters
    },
    //#endregion

    //#region CARDS
    getCards() { //http是个object，.get('/posts)是这个object的对象
        return http.get('/posts',)
    },

    getCard(id) {
        return http.get('/posts/' + id)
    },

    createCard(card) {
        return http.post('/posts', card)
    },

    //body
    updateCard(card) {
        return http.put('/posts/' + card.id, card) //id在这里是指明路由 /id
    },

    deleteCard(id) {
        return http.delete('/posts/' + id)
    },
    //#endregion

    //#region COMMENTS
    getComments() {
        return http.get('/comments')
    },

    getComment(id) {
        return http.get('/comments' + id)
    },

    updateComment(comment) {
        return http.put('/comments/' + comment.id, comment)
    },

    deleteComment(id) {
        return http.delete('/comments/' + id)
    },
    //#endregion
}

//这里是API,运用了fetch