import {Axios} from "./Axios";

export function getArticles(keyword,page) {
    return Axios.get(`everything?q=${keyword}&pageSize=10&page=${page}&apiKey=9f395695403c4ad08ded1cfaeec0aaab`)
}


export const homeService = {
    getArticles
};