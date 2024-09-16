import axios from "axios";

export default class GetProjects {
    static async getAll() {
        
        try {
            const response = await axios.get('https://api.test.cyberia.studio/api/v1/projects')
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}