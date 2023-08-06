import axios from 'axios'

const requests = axios.create({
        // baseURL:"http://198.148.120.69:8081",
        baseURL:"http://127.0.0.1:8080",
        timeout:5000
})

export default requests;