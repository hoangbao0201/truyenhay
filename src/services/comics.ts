import { BACKEND_URL } from "@/lib/config";
import axios from "axios";


export const getComicsNew = async (query?: string) => {
    try {
        const comics = await axios.get(`${BACKEND_URL}/api/rss_new`, {
            headers: {

            }, 
        })
    
        return comics.data
    } catch (error) {
        if(axios.isAxiosError(error) && error.response?.data) {
            return error.response.data;
        } else {
            return {
                success: false,
                message: (error as Error).message
            };
        }
    }
}
export const getComicBySlug = async (query?: string) => {
    try {
        const comics = await axios.get(`https://hobanovel-be.azurewebsites.net/api/novels/search-by-slug/tay-du-moi-ngay-mot-nen-huong-ta-boi-canh-vo-dich-roi`, {
            headers: {

            }, 
        })
    
        return comics.data
    } catch (error) {
        if(axios.isAxiosError(error) && error.response?.data) {
            return error.response.data;
        } else {
            return {
                success: false,
                message: (error as Error).message
            };
        }
    }
}