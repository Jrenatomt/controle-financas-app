import axios from 'axios'

const httpClient = axios.create({ 
    baseURL: 'https://finacas-api.herokuapp.com/'}) 

class ApiService{

    constructor(apiurl){
        this.apiurl = apiurl;
    }

    get(url){
        const requestURL = `${this.apiurl}${url}`
        return httpClient.get(requestURL);
    }

    post(url,objeto){
        const requestURL = `${this.apiurl}${url}`
        return httpClient.post(requestURL, objeto);
    }

    put(url, objeto){
        const requestURL = `${this.apiurl}${url}`
        return httpClient.put(requestURL, objeto);
    }

    delete(url){
        const requestURL = `${this.apiurl}${url}`
        return httpClient.delete(requestURL);
    }

}

export default ApiService;