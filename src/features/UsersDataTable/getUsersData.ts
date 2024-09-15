import axios, { AxiosResponse } from "axios";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export const getUsersData = async (): Promise<User[]> => {
  const apiUrl = `https://jsonplaceholder.typicode.com/users`;

  const response: AxiosResponse<User[]> = await axios.get(apiUrl);

  return response.data;
};
