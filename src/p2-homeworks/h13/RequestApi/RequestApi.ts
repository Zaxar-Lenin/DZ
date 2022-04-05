// import axios from 'axios'


import axios from "axios";

export const RequestApi  = (success: boolean) => {
    return axios.post("https://neko-cafe-back.herokuapp.com/auth/test", {success})
}