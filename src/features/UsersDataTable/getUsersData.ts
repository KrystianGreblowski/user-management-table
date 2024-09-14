import axios from "axios";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export const getUsersData = async (): Promise<User[]> => {
  const apiUrl = `https://jsonplaceholder.typicode.com/users`;

  try {
    const response = await axios.get<User[]>(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
