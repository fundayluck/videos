import axios from "axios";

const KEY = "AIzaSyAR7gX_UyNRwg6dhKQfur3TlZrOlSQrz5Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
