import UserContext from "../context/UserContext";
import QueryProvider from "./QueryProvider";

const AllProvider = ({ children }) => {
  return (
    <QueryProvider>
      <UserContext>{children}</UserContext>
    </QueryProvider>
  );
};

export default AllProvider;
