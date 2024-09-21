import axios from "axios";

// const KEY_API = "2jgnDFLz7HQzky-Cs1XEvIibRCODDDkK3WcyE2BdPks";

axios.defaults.baseURL = "https://api.unsplash.com/";
// axios.defaults.headers.common["Authorization"] = `Client-ID ${KEY_API}`;
axios.defaults.params = {
  client_id: "2jgnDFLz7HQzky-Cs1XEvIibRCODDDkK3WcyE2BdPks",
  orientation: "landscape",
  per_page: 12,
};

const fetchImages = async (query, page) => {
  const { data } = await axios.get(
    `/search/photos?query=${query}&page=${page}`
  );
  return data;
};

export default fetchImages;
