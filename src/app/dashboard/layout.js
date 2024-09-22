
import Sidebar from "@/components/dashboard/sidebar";
import DashHeader from "@/shared/DashHeader";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col flex-auto flex-shrink-0 min-h-screen antialiased">
      <DashHeader />
      <Sidebar />
      <div className="mt-16 ml-14 md:ml-64">{children}</div>
    </div>
  );
};

export default MainLayout;
