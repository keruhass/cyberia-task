import axios from "axios";

export default class GetCategories {
    static async getAll() {
        
        try {
            const response = await axios.get('https://api.test.cyberia.studio/api/v1/project-categories')
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}