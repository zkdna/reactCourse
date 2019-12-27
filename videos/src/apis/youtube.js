import axios from "axios";

const KEY = "AIzaSyDVVKiNQsdctIXJu1S28dzXwWM9yi0QL7M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
