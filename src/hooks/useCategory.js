import { getCategories } from "@/utils/api/category";
import { useQuery } from "react-query";

const useCategory = () => {
  const {
    data: categories = [],
    isLoading: loader,
    refetch,
  } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategories(),
  });

  return { categories, loader, refetch };
};

export default useCategory;
