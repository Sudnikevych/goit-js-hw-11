import axios from 'axios';
export let page = 1;
export let query = null;

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '30861095-900d11de2a0ee4beed94a76a9';
const options = `?key=${KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`;

export async function getImg(searchQuery) {
  if (searchQuery !== query) {
    page = 1;
    query = searchQuery;
  }
  try {
    const response = await axios.get(
      `${BASE_URL}${options}&q=${query}&page=${page}`
    );
    page += 1;
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure('Something went wrong! Please retry');
    console.log(error);
  }
}
