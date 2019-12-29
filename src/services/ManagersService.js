import { HttpService } from './HttpService'

class ManagersService extends HttpService  {
        
    getAll(term = '') {
        return this.axios.get('/managers', {params:{term}})
    }

}

export const managersService = new ManagersService()