import axios from "axios";
import baseApi from "./baseApi";

const getCategoriesApi = async () => {
    try{
        const response = await baseApi.get('/categories');
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            throw error
        }

        throw new Error('exists error in getCategoriesApi function')
    }

}  


export {getCategoriesApi, }









