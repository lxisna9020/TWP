import { encodeURI } from "base-64"

export default class HttpClient {
    constructor(hostUrl, token) { // hostUrl = "localhost://8080"
        this.hostUrl = hostUrl
        this.token = token
        this.username = "twp"
        this.password = "1O#@doNAnEdEL&PhEa"
    }

    get(url) {
        return new Promise((resolve, reject) => {
            fetch(this.hostUrl + url, {
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + this.token,
                    'Access-Control-Allow-Origin': "*"
                },
                referrer: "http://localhost:8888/"
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))

        })
    }

    // post方式
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(this.hostUrl + url, {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': 'localhost',
                    'Authorization': 'Basic ' + encodeURI(this.username + ":" + this.password),
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))

        })
    }


    //put 修改
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(this.hostUrl + url, {
                method: 'PUT',
                headers: {
                    'Access-Control-Allow-Origin': 'localhost',
                    'Authorization': 'Basic ' + encodeURI(this.username + ":" + this.password),
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))

        })
    }

    //delete
    delete(url, data) {
        return new Promise((resolve, reject) => {
            fetch(this.hostUrl + url, {
                method: 'DELETE',
                headers: {
                    'Access-Control-Allow-Origin': 'localhost',
                    'Authorization': 'Basic ' + encodeURI(this.username + ":" + this.password),
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))

        })
    }
}
