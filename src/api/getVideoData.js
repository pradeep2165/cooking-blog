import axios from 'axios';

export const getVideoData = async () => {
  try {
    const { data } = await axios.get(`https://youtube-search-and-download.p.rapidapi.com/channel`, {
      params: {
        id: 'UCuvDtNGI2mGDw4oKaq2OOqQ',
        sort: 'n'
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_YOUTUBE_API,
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
      },
    });

      return data;
  } catch (error) {
    console.log(error);
  }
};
export const getPlayListVideoData = async (id) => {
  try {
    const { data } = await axios.get(`https://youtube-search-and-download.p.rapidapi.com/playlist`, {
      params: {
        id: id,
        
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_YOUTUBE_API,
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
      },
    });

      return data;
  } catch (error) {
    console.log(error);
  }
};