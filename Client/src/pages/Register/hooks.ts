import axios from "axios";
import { registerUserData } from "./types";

const useRegisterUser = async (data: registerUserData): Promise<any> => {
  return new Promise( (resolve, reject) => {
    axios.post('http://localhost:5000/api/user/create', data)
      .then( (response) => resolve(response.data))
      .catch( (error) => reject(error.response.data))
  })
}

export {
  useRegisterUser
}