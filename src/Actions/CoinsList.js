import axios from "axios";
import { API_URL } from "./ServerConnection";
import { RapidApiHost, RapidApiKey } from "../config";

export const fetchCoinList = async () => {
  try {
    const headers = {
      "X-RapidAPI-Key": RapidApiKey,
      "X-RapidAPI-Host": RapidApiHost,
    };
    const result = await axios.get(`${API_URL}/coins`, { headers });
    // console.log("==============>", result.data);
    return result.data;
  } catch (e) {
    return e;
  }
};
