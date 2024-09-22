import AddPackageForm from "@/components/dashboard/Packages/AddPackageForm";

const AddPackagePage = () => {
  return (
    <div className="px-2 py-10 space-y-8 md:px-4">
      <h1 className="text-3xl font-semibold text-center md:text-4xl">
        Add New <span className="text-lime-600">Package</span>
      </h1>
      <AddPackageForm />
    </div>
  );
};

export default AddPackagePage;
