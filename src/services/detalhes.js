import { http } from './config'

export default {

    listar: () => {
        return http.get('5fcf051d-2867-4698-8c1c-df076b4d2948')
    }
}