import axios from 'axios';

const KEY = 'AIzaSyA-tZyNqz3p1zVE8l0jF9M1ahKklc0lT78';
const ENDPOINT = 'https://www.googleapis.com/youtube/v3/search';

export const searchAPI = searchWord => {
  const params = {
    part: "snippet",
    maxResults: 10,
    key: KEY,
    type: "video",
    q: searchWord
  };
  return axios.get(ENDPOINT, { 
    params 
  }).then(response => {
    return response.data.items;
  }).catch(err => {
    console.error(err);
    return [];
  });
};