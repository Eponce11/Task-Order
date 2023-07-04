import axios from "axios";
import { userLoginData } from "./types";

const useLoginUser = async (data: userLoginData): Promise<any> => {
  return new Promise( (resolve, reject) => {
    axios.post("http://localhost:5000/api/user/login", data)
      .then( (response) => resolve(response.data))
      .catch( (error) => reject(error.response.data.error))
  })
}

export { useLoginUser };
