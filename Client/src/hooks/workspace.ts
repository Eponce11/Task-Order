import axios from "axios";
import { NewWorkspaceData } from "../pages/Home/types";

const URI = "http://localhost:5000/api/workspace";

const useGetAllWorkspaces = async (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${URI}/get_all/${id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response.data));
  });
};

const useCreateWorkspace = async (data: NewWorkspaceData): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${URI}/create`, data)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response.data));
  });
};

export { useGetAllWorkspaces, useCreateWorkspace };
