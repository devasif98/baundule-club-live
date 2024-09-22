import PackageTable from "@/components/Dashboard/Packages/PackageTable";
import Link from "next/link";

const PackagesPage = () => {
  return (
    <div className="px-4">
      <div className="flex justify-between gap-2 py-8">
        <h1 className="text-2xl font-semibold md:text-4xl">
          All <span className="text-lime-600">Packages</span>
        </h1>
        <Link
          href={"/dashboard/add-package"}
          className="px-2 py-2 text-base text-white rounded md:px-4 md:text-lg bg-lime-600"
        >
          Add Package
        </Link>
      </div>
      <PackageTable />
    </div>
  );
};

export default PackagesPage;
