import Axios from "axios";

const instance = Axios.create({
    baseURL:'https://burger1-app.firebaseio.com/'
})

export default instance;