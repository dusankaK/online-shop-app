import { HttpService } from './HttpService'

class ShopsService extends HttpService {
    getAll(name='') {
        return this.axios.get('/shops', {params:{name}})
    }
}

export const shopsService = new ShopsService()