import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search';
const key = 'WNKkXWHEDO9fTXW0GKQrCsOYzawimMDj0PCFPQkI_Ig';

export default async function requestPhotos(page, query) {
  const request = await axios.get('/photos', {
    params: {
      page,
      query,
      client_id: key,
      per_page: 15,
    },
  });
  return request.data;
}
