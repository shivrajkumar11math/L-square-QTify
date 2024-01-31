import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbum = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    // console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewAlbum = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    // console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    console.log("Songs : ", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
