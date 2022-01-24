function resolve(data) {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

function getRandomInt() {
    return Math.floor(Math.random());
}

var categories = [
    { id: 1, name: 'Uncategorized' },
    { id: 2, name: 'TODO' },
    { id: 3, name: 'DOING' },
    { id: 4, name: 'DONE' },
]

var cards = [
    { id: 1, categories: [1], title: 'Title: Card 1 - Uncategorized', content: 'Content: Card 1 - Uncategorized' },
    { id: 2, categories: [2], title: 'Title: Card 2 - TODO', content: 'Content: Card 2 - TODO' },
    { id: 3, categories: [3], title: 'Title: Card 3 - DOING', content: 'Content: Card 3 - DOING' },
    { id: 4, categories: [4], title: 'Title: Card 4 - DONE', content: 'Content: Card 4 - DONE' },
    { id: 5, categories: [3], title: 'Title: Card 5 - DOING', content: 'Content: Card 5 - DOING' },
    { id: 6, categories: [4], title: 'Title: Card 6 - DONE', content: 'Content: Card 6- DONE' },
]

var comments = [
    { id: 1, post: 1, content: 'Comment of Card 1' },
    { id: 2, post: 2, content: 'Comment of Card 2' },
    { id: 3, post: 3, content: 'Comment of Card 3' },
    { id: 4, post: 4, content: 'Comment of Card 4' },
]

export default {
    //#region CATEGORIES
    name: 'api',
    getCategories() {
        return resolve(categories)
    },

    getCategorie(id) {
        return resolve(categories.find(_category => _category.id == id))
    },

    createCategorie(category) {
        categories.push({ ...category, id: getRandomInt() })
        return resolve(categories)
    },

    updateCategorie(category) {
        categories = categories.map(_category => {
            if (_category.id == category.id) {
                return { ..._category, ...category }
            } else {
                return _category
            }
        })
        return resolve(categories.find(_category => _category.id == category.id))
    },

    deleteCategorie(id) {
        categories = categories.filter(_category => _category.id != id)
        return resolve(categories)
    },
    //#endregion

    //#region CARDS
    getCards() { //http是个object，.get('/posts)是这个object的对象
        return resolve(cards)
    },

    getCard(id) {
        return resolve(cards.find(_card => _card.id == id))
    },

    createCard(card) {
        cards.push({ ...card, id: getRandomInt() })
        return resolve(cards)
    },

    //body
    updateCard(card) {
        cards = cards.map(_card => {
            if (_card.id == card.id) {
                return { ..._card, ...card }
            } else {
                return _card
            }
        })
        return resolve(cards.find(_card => _card.id == card.id))
    },

    deleteCard(id) {
        cards = cards.filter(_card => _card.id != id)
        return resolve(cards)
    },
    //#endregion

    //#region COMMENTS
    getComments() {
        return resolve(comments)
    },

    getComment(id) {
        return resolve(comments.find(_comment => _comment.id == id))
    },

    createComments(comment) {
        comments.push({ ...comment, id: getRandomInt() })
        return resolve(comments)
    },

    updateComment(comment) {
        comments = comments.map(_comment => {
            if (_comment.id == comment.id) {
                return { ..._comment, ...comment }
            } else {
                return _comment
            }
        })
        return resolve(comments.find(_comment => _comment.id == comment.id))
    },

    deleteComment(id) {
        comments = comments.filter(_comment => _comment.id != id)
        return resolve(comments)
    },
    //#endregion
}

//这里是API,运用了fetch