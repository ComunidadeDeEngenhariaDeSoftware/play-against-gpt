import axios from "axios";

import { useQuery } from "react-query";

const api = axios.create({
  baseURL: "",
  timeout: 30000,
});

export function useGetChatResponse() {
  return useQuery("ChatResponse", async () => {
    const { data } = await api.get("");
    return data;
  });
}
