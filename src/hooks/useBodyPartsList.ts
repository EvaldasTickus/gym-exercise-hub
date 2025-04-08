import { useEffect, useState } from "react";
import axiosInstance from "../services/api-client";
import { CanceledError } from "axios";

const useBodyPartsList = () => {
  const [bodyPartList, setBodyPartList] = useState<string[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    axiosInstance
      .get("/exercises/bodyPartList", { signal: controller.signal })
      .then((res) => {
        setBodyPartList(res.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { bodyPartList, error };
};

export default useBodyPartsList;
