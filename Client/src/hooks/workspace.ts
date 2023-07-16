import axios from "axios";

const URI = "http://localhost:5000/api/workspace";

const useGetAllWorkspaces = async (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${URI}/get_all/${id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response.data));
  });
};

export { useGetAllWorkspaces };
