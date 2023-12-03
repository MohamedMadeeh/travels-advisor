import axios from "axios";

const Url =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359"
  },
  headers: {
    "X-RapidAPI-Key": "eb35358c9dmsh12c71ed00c87707p1493a0jsn66fea6470351",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com"
  }
};

export const grtPlacesData = async () => {
  try {
    const {
      data: { data }
    } = await axios.get(Url, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
