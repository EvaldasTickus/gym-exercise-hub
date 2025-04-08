import axiosInstance from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Exercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: number;
  name: string;
  target: string;
}


const useData = () =>
  useQuery<Exercise[], Error>({
    queryKey: ["exercises"],
    queryFn: () =>
      axiosInstance
        .get(`/exercises?&limit=1400`)
        .then((res) => res.data),
    staleTime: 1000 * 60 * 60
  });

export default useData;