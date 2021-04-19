import axios from "axios"
// import config from "../config"

export const callApi = (endpoint, method, token, payload) => {
   console.log("get env variable",process.env.REACT_APP_API_URL)
    const authHeaders = token
        ? {
            Authorization: `Bearer ${token}`,
        }
        : {};

    const configaxios = {
        method,
        // url: `${process.env.REACT_REACT_APP_API_URL}/${endpoint}`,
        body: JSON.stringify(payload),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...authHeaders,
        }
    }

    return new Promise((resolve, reject) => {
        // axios(configaxios).then((res) => {
        //     resolve(res.data);
        // }).catch((error) => {
        //     reject(error);
        // })

        resolve(payload.email)
    })

}