import axios from "axios";

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const getHistory = async () => {
  try {
    const response = await axios.get(`${baseUrl}/history`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching history:", error);
    throw error;
  }
};
