import axios from 'axios';

const API_KEY = 'AIzaSyAoWhCo9Cliw8_A-pgtSV263cJ425UKx_E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        key: API_KEY,
        type: 'video',
        part: 'snippet',
        maxResults: 15
    }

});