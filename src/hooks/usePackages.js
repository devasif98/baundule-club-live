import { getAllPackages } from "@/utils/api/package";
import { useQuery } from "react-query";

const usePackages = () => {
  const {
    data: allPackages = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const response = await getAllPackages();
      return response.data;
    },
  });

  return { allPackages, refetch, isLoading };
};

export default usePackages;
