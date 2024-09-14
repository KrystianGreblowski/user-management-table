import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export const useUsersData = () => {
  const [usersData, setUsersData] = useState<User[]>([]);

  useEffect(() => {
    const apiUrl = `https://jsonplaceholder.typicode.com/users`;

    const fetchData = async (): Promise<User[]> => {
      try {
        const response = await axios.get<User[]>(apiUrl);
        return response.data;
      } catch (error) {
        console.error(error);
        return [];
      }
    };

    fetchData().then((data) => setUsersData(data));
  }, []);

  return { usersData };
};
