import axios from 'axios';

const KEY = 'AIzaSyBuF4TUmIvwmBSuEb6S6P8SHDv-G3rpQZA'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})