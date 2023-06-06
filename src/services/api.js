import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '37070348-644e86a1ca422e0dac501cb0d';

export const getImages = async (text, count) => {
    try{
        const data = await axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
        return data;
    }catch(error){
        console.log(error)
    }
}