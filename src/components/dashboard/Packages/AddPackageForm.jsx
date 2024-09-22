"use client";

import { districtData } from "@/data/districtData";
import { divisionData } from "@/data/divisionData";
import useCategory from "@/hooks/useCategory";
import { savePackage } from "@/utils/api/package";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddPackageForm = () => {
  const [divisionID, setDivisionID] = useState(null);
  const [filteredDistrict, setFilteredDistrict] = useState(districtData);

  const { categories: categoriesData } = useCategory();

  useEffect(() => {
    const result = districtData.filter(
      (district) => district.division_id === divisionID
    );

    setFilteredDistrict(result);
  }, [divisionID]);

  const router = useRouter();

  const [categories, setCategories] = useState([]);

  const handleCategory = (event) => {
    const {
      target: { value },
    } = event;

    setCategories(typeof value === "string" ? value.split(",") : value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (data) => {
    let {
      tips,
      images,
      facilities,
      inclusions,
      exclusions,
      additionalInfo,
      hopeDestination,
      welcome,
      lunch,
      evening,
      name,
      price,
      childPrice,
      division,
      district,
      tourLocation,
      pickupLocation,
      minDuration,
      maxDuration,
      minMembers,
      maxMembers,
      description,
      information,
      mapUrl,
      coverPic,
    } = data;

    tips = tips.split(",").map((item) => item.trim());
    lunch = lunch.split(",").map((item) => item.trim());
    welcome = welcome.split(",").map((item) => item.trim());
    evening = evening.split(",").map((item) => item.trim());
    images = images.split(",").map((item) => item.trim());
    facilities = facilities.split(",").map((item) => item.trim());
    inclusions = inclusions.split(",").map((item) => item.trim());
    exclusions = exclusions.split(",").map((item) => item.trim());
    additionalInfo = additionalInfo.split(",").map((item) => item.trim());
    hopeDestination = hopeDestination.split(",").map((item) => item.trim());

    const packageData = {
      name,
      categories,
      minDuration,
      maxDuration,
      price,
      childPrice,
      minMembers,
      maxMembers,
      division,
      district,
      tourLocation,
      pickupLocation,
      hopeDestination,
      meals: { welcome, lunch, evening },
      facilities,
      tips,
      inclusions,
      exclusions,
      additionalInfo,
      coverPic,
      images,
      mapUrl,
      information,
      description,
    };

    const response = await savePackage(packageData);

    if (response?.success) {
      toast.success("Package created successfully");
    } else {
      toast.error(response.message);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="space-y-2 md:space-y-4"
      >
        {/* package information */}
        <h1 className="text-xl font-semibold uppercase">Package Info</h1>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <TextField
            {...register("name", {
              required: "*package name is required",
              min: { value: 2, message: "*invalid package name" },
              max: { value: 20, message: "*invalid package name" },
            })}
            label="Package Name *"
            fullWidth
            error={errors.name ? true : false}
            helperText={errors.name?.message}
          />
          <FormControl fullWidth required>
            <InputLabel id="category-label">Category</InputLabel>

            <Select
              multiple
              value={categories}
              labelId="category-label"
              onChange={handleCategory}
              input={<OutlinedInput label="Category" />}
            >
              {categoriesData.map((category, i) => (
                <MenuItem key={i} value={category.title}>
                  {category.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <TextField
            label="Min Duration *"
            type="number"
            fullWidth
            {...register("minDuration", {
              required: "*min duration is required",
              min: { value: 1, message: "*invalid min duration" },
            })}
            error={errors.minDuration ? true : false}
            helperText={errors.minDuration?.message}
          />
          <TextField
            label="Max Duration *"
            type="number"
            fullWidth
            {...register("maxDuration", {
              required: "*max duration is required",
              min: { value: 1, message: "*invalid max duration" },
            })}
            error={errors.maxDuration ? true : false}
            helperText={errors.maxDuration?.message}
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <TextField
            {...register("childPrice", {
              required: "*price is required",
              min: { value: 1, message: "*invalid price" },
            })}
            error={errors.price ? true : false}
            helperText={errors.price?.message}
            label="Price *"
            type="number"
            fullWidth
          />
          <TextField
            {...register("price", {
              required: "*price is required",
              min: { value: 1, message: "*invalid price" },
            })}
            error={errors.price ? true : false}
            helperText={errors.price?.message}
            label="Child Price *"
            type="number"
            fullWidth
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <TextField
            label="Min Members *"
            type="number"
            fullWidth
            {...register("minMembers", {
              required: "*min members is required",
              min: { value: 1, message: "*invalid min members" },
            })}
            error={errors.minMembers ? true : false}
            helperText={errors.minMembers?.message}
          />
          <TextField
            label="Max Members *"
            type="number"
            fullWidth
            {...register("maxMembers", {
              required: "*max members is required",
              min: { value: 1, message: "*invalid max members" },
            })}
            error={errors.maxMembers ? true : false}
            helperText={errors.maxMembers?.message}
          />
        </div>

        {/* package locations */}
        <h1 className="text-xl font-semibold uppercase">Package Locations</h1>

        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <TextField
            {...register("division", {
              required: "*division is required",
            })}
            label="Division *"
            defaultValue=""
            fullWidth
            select
            error={errors.division ? true : false}
            helperText={errors.division?.message}
          >
            {divisionData.map((division) => (
              <MenuItem
                onClick={() => setDivisionID(division.id)}
                value={division.name}
                key={division.id}
              >
                {division.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            {...register("district", {
              required: "*district is required",
            })}
            label="District *"
            defaultValue=""
            select
            fullWidth
            disabled={divisionID === null}
            error={errors.district ? true : false}
            helperText={errors.district?.message}
          >
            {filteredDistrict.map((district) => (
              <MenuItem key={district.id} value={district.name}>
                {district.name}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <TextField
            {...register("tourLocation", {
              required: "*tour location is required",
            })}
            label="Tour Location *"
            fullWidth
            error={errors.tourLocation ? true : false}
            helperText={errors.tourLocation?.message}
          />
          <TextField
            {...register("pickupLocation", {
              required: "*pickup location is required",
            })}
            label="Pickup Location *"
            fullWidth
            error={errors.pickupLocation ? true : false}
            helperText={errors.pickupLocation?.message}
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <TextField
            {...register("hopeDestination", {
              required: "*hope destination is required",
            })}
            label="Hope Destination *"
            fullWidth
            error={errors.hopeDestination ? true : false}
            helperText={errors.hopeDestination?.message}
          />
          <div className="w-full max-md:hidden"></div>
        </div>

        {/* package details */}
        <h1 className="text-xl font-semibold uppercase">Package Details</h1>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <TextField
            {...register("facilities", {
              required: "*facilities is required",
            })}
            label="Facilities *"
            fullWidth
            error={errors.facilities ? true : false}
            helperText={errors.facilities?.message}
          />
          <TextField
            {...register("tips", {
              required: "*tips meals is required",
            })}
            label="Tips *"
            fullWidth
            error={errors.tips ? true : false}
            helperText={errors.tips?.message}
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <TextField
            {...register("inclusions", {
              required: "*inclusions is required",
            })}
            label="Inclusions *"
            fullWidth
            error={errors.inclusions ? true : false}
            helperText={errors.inclusions?.message}
          />
          <TextField
            {...register("exclusions", {
              required: "*exclusions meals is required",
            })}
            label="Exclusions *"
            fullWidth
            error={errors.exclusions ? true : false}
            helperText={errors.exclusions?.message}
          />
        </div>

        {/* meals */}
        <h1 className="font-semibold uppercase">Meals</h1>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <TextField
            {...register("welcome", {
              required: "*welcome meals is required",
            })}
            label="Welcome*"
            fullWidth
            error={errors.welcome ? true : false}
            helperText={errors.welcome?.message}
          />
          <TextField
            {...register("lunch", {
              required: "*lunch meals is required",
            })}
            label="Lunch*"
            fullWidth
            error={errors.lunch ? true : false}
            helperText={errors.lunch?.message}
          />
          <TextField
            {...register("evening", {
              required: "*evening meals is required",
            })}
            label="Evening*"
            fullWidth
            error={errors.evening ? true : false}
            helperText={errors.evening?.message}
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <TextField
            {...register("additionalInfo", {
              required: "*additional info is required",
            })}
            label="Additional Info"
            fullWidth
            multiline
            rows={4}
            error={errors.additionalInfo ? true : false}
            helperText={errors.additionalInfo?.message}
          />
        </div>

        {/* more information */}
        <h1 className="text-xl font-semibold uppercase">More Info</h1>

        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <TextField
            {...register("coverPic", {
              required: "*cover pic is required",
            })}
            label="Cover Pic *"
            fullWidth
            error={errors.coverPic ? true : false}
            helperText={errors.coverPic?.message}
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <TextField
            {...register("images", {
              required: "*images is required",
            })}
            label="Images *"
            fullWidth
            error={errors.images ? true : false}
            helperText={errors.images?.message}
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <TextField
            {...register("mapUrl", {
              required: "*map url is required",
            })}
            label="Map URL *"
            fullWidth
            error={errors.mapUrl ? true : false}
            helperText={errors.mapUrl?.message}
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <TextField
            {...register("information", {
              required: "*information is required",
            })}
            label="Information *"
            fullWidth
            multiline
            rows={4}
            error={errors.information ? true : false}
            helperText={errors.information?.message}
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <TextField
            {...register("description", {
              required: "*description is required",
            })}
            label="Description *"
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
            Add Package
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPackageForm;
