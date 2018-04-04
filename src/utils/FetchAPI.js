import axios from 'axios';

const FetchApi = (method, url, params) => {
    return new Promise((resolve, reject) => {
        resolve(
                axios({
                method: method,
                url: url,
                data: params,
                responseType: 'json'
            }))
    });
}

export default FetchApi;