import axios from 'axios'

const requests = axios.create({
        baseURL:"http://198.148.120.69:8081",
        timeout:5000
})

export default requests;