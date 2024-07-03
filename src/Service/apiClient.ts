import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '597b8e307469439f92dfa846287bd8fe'
    }
})