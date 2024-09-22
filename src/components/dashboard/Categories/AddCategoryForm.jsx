"use client";

import useCategory from "@/hooks/useCategory";
import { saveCategory } from "@/utils/api/category";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddCategoryForm = () => {
  const { refetch } = useCategory();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (data) => {
    const response = await saveCategory(data);

    if (response?.success) {
      toast.success("Category created successfully");
      refetch();
    } else {
      toast.error(response?.message);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div className="flex gap-2 md:gap-4">
          <TextField
            {...register("title", {
              required: "*title is required",
              min: { value: 2, message: "*invalid title" },
              max: { value: 20, message: "*invalid title" },
            })}
            label="Category Name *"
            id="name"
            fullWidth
            error={errors.title ? true : false}
            helperText={errors.title?.message}
          />
          <TextField
            {...register("icon", {
              required: "*icon is required",
              min: { value: 2, message: "*invalid icon" },
            })}
            label="Category Icon *"
            id="icon"
            fullWidth
            error={errors.icon ? true : false}
            helperText={errors.icon?.message}
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <TextField
            {...register("description")}
            label="Description"
            fullWidth
            multiline
            rows={4}
            error={errors.description ? true : false}
            helperText={errors.description?.message}
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 border rounded border-lime-600"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-lg text-white rounded bg-lime-600"
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategoryForm;
