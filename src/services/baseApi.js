import axios from "axios";

const baseApi = axios.create({
    baseURL: "https://dummyjson.com/products"
})

baseApi.interceptors.request.use(
    (request) => {
        return request;

    }
)


baseApi.interceptors.response.use(
    (response) => {
        return response;
    },

    (error) => {
        throw error;
    }

)


export default baseApi;





