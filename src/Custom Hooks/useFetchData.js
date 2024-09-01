import { useQuery } from "@tanstack/react-query";
import Axios from "../api/axios";

const useFetchData = (config) => {
  const { endPoint } = config;
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["fetchData", endPoint],
    queryFn: async () => {
      const response = await Axios.get(endPoint)
        .then((res) => {
          console.log(" successful fetch ", res);
        })
        .catch((err) => {
          console.log(" Faileddd fetch !! with err ", err);
        });
      return response.data;
    },
  });

  return { data, isLoading, isError, error };
};

export default useFetchData;
