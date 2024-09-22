import AddCategoryForm from "@/components/dashboard/Categories/AddCategoryForm";


const AddCategoryPage = () => {
  return (
    <div className="px-2 py-10 space-y-8 md:px-4">
      <h1 className="text-3xl md:text-4xl font-semibold text-center">
        Add New <span className="text-lime-600">Category</span>
      </h1>
      <AddCategoryForm />
    </div>
  );
};

export default AddCategoryPage;
