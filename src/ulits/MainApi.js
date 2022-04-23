import options from "./config.js";

class MainApi {
    constructor(options) {
        this._url = options.baseApiUrl;
        this._imgUrl = options.baseImgUrl;
        this._headers = options.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

}

const mainApi = new MainApi(options);
export default mainApi;