import axios from "axios";


export const getChaptersByNovel = async (query?: string) => {
    try {
        const chapters = await axios.get(`https://hobanovel-be.azurewebsites.net/api/novels/tay-du-moi-ngay-mot-nen-huong-ta-boi-canh-vo-dich-roi/chapters`, {
            headers: {

            }, 
        })
    
        return chapters.data
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