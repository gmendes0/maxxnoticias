import axios from 'axios'

const newsapi = axios.create({baseURL: 'https://newsapi.org/'})

export default newsapi
