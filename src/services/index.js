import axios from "axios"
export const apiBase = "https://api.advant-ex.ru/api/";
export const apiStorage = "https://api.advant-ex.ru/storage";

const $api = axios.create({
  baseURL: apiBase,
})