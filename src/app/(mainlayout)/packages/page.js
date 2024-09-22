"use client";

import "@/styles/packages.css";
import { getCategories } from "@/utils/api/category";
import { getPackages } from "@/utils/api/package";
import {
  FormControl,
  FormControlLabel,
  MenuItem,
  Pagination,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useQuery } from "react-query";

const Tour = () => {
  // division
  const [divi, setDivi] = useState("");
  const [selected, setSelected] = useState("");

  // duration
  const [value, setValue] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");

  // category
  const [selectedStatus, setSelectedStatus] = useState("");

  // page limit
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);

  // fetch packages
  const { data: { data: packages = [], total } = {}, isLoading } = useQuery({
    queryKey: ["packages", selectedStatus, selected, value, page, limit],
    queryFn: () => getPackages(selectedStatus, selected, value, page, limit),
  });

  const totalPages = Math.ceil(
    selectedStatus || selected || value
      ? packages.length / limit
      : total / limit
  );

  // fetch category
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  return (
    <>
      <Hero />
      <Pkg
        data={packages}
        isLoading={isLoading}
        divi={divi}
        setDivi={setDivi}
        selected={selected}
        setSelected={setSelected}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        selectedDuration={selectedDuration}
        setSelectedDuration={setSelectedDuration}
        value={value}
        setValue={setValue}
        category={categories}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default Tour;

const Hero = () => {
  return (
    <>
      <div className="page-header -mt-7">
        <div className="container mx-auto">
          <div
            className="flex flex-col items-center justify-center"
            style={{
              minHeight: "400px",
            }}
          >
            <h3 className="mb-4 text-white uppercase display-4">
              Your Destination
            </h3>
            <div className="w-3/4">
              <div
                className="sticky flex items-center justify-between w-full p-1 mb-5 bg-white rounded-full shadow-lg"
                style={{ top: "5px" }}
              >
                <input
                  className="w-full py-2 pl-4 text-xs font-bold leading-tight text-gray-700 uppercase bg-gray-100 rounded-full focus:outline-none focus:shadow-outline lg:text-sm"
                  type="text"
                  placeholder="Search"
                />
                <div className="p-2 bg-gray-600 rounded-full cursor-pointer hover:bg-lime-400">
                  <svg
                    className="w-6 h-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Pkg = ({
  data,
  isLoading,
  divi,
  setDivi,
  selected,
  setSelected,
  selectedStatus,
  setSelectedStatus,
  selectedDuration,
  setSelectedDuration,
  value,
  setValue,
  category,
  page,
  setPage,
  totalPages,
}) => {
  return (
    <>
      <div className="container h-full gap-5 mx-auto my-10 lg:flex">
        <div className="h-full p-5 border rounded shadow-lg lg:w-1/4 lg:sticky top-20">
          <Filtering
            divi={divi}
            setDivi={setDivi}
            selected={selected}
            setSelected={setSelected}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            selectedDuration={selectedDuration}
            setSelectedDuration={setSelectedDuration}
            value={value}
            setValue={setValue}
            category={category}
          />
        </div>
        <div className="lg:w-3/4">
          <div className="p-5 mb-5 border rounded shadow-lg">
            <Category
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
              category={category}
            />
          </div>
          <div className="p-5 border rounded shadow-lg">
            {isLoading ? (
              <>
                <Loader />
              </>
            ) : (
              <>
                {data?.map((pkg, i) => {
                  return (
                    <>
                      <article
                        className={`md:flex bg-white transition hover:shadow-xl${
                          i === data.length - 1 ? "" : " mb-5"
                        }`}
                        key={i}
                      >
                        <div className="hidden md:block rotate-180 p-2 [writing-mode:_vertical-lr]">
                          <time
                            datetime="2022-10-10"
                            className="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase"
                          >
                            <span>{pkg.amount} TK</span>
                            <span className="flex-1 w-px bg-gray-900/10"></span>
                            <span>{pkg.duration} Days</span>
                          </time>
                        </div>

                        <div className="sm:basis-56">
                          <Image
                            alt="Guitar"
                            src={pkg.coverimg}
                            className="object-cover w-full h-48 aspect-square md:h-full"
                            width={500}
                            height={500}
                          />
                        </div>

                        <div className="flex flex-col justify-between flex-1">
                          <div className="p-4 border-s border-gray-900/10 sm:border-l-transparent sm:p-6">
                            <h3 className="font-bold text-gray-900 uppercase">
                              {pkg.location}
                            </h3>

                            {/* <p className="mt-2 text-gray-700 line-clamp-4 text-sm/relaxed">
                              {pkg?.description?.map((desc) => desc.desc)}
                            </p> */}
                          </div>

                          <div className="sm:flex sm:items-end sm:justify-end">
                            <Link
                              href={`/packagedetails/${pkg._id}`}
                              className="block px-5 py-3 text-xs font-bold text-center text-gray-900 uppercase transition bg-lime-300 hover:bg-lime-400 "
                            >
                              Visit here
                            </Link>
                          </div>
                        </div>
                      </article>
                    </>
                  );
                })}
              </>
            )}
            <Paginations
              page={page}
              setPage={setPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Filtering = ({
  divi,
  setDivi,
  selected,
  setSelected,
  selectedStatus,
  selectedDuration,
  setSelectedDuration,
  value,
  setValue,
  filteredDetails,
}) => {
  const handleShowAllDataChange = (event) => {};

  // duration
  const durations = [
    { value: "1-1", label: "1 day" },
    { value: "2-2", label: "2 days" },
    { value: "3-4", label: "3-4 days" },
    { value: "5-30", label: "5+ days" },
  ];
  const handleChanged = (event) => {
    const selectedValue = event.target.value;
    const selectedLabel = durations.find(
      (item) => item.value === selectedValue
    )?.label;
    setSelectedDuration(selectedLabel);
    setValue(selectedValue);
  };

  const clearDuration = () => {
    setSelectedDuration("");
    setValue("");
    handleShowAllDataChange();
  };

  // division

  const division = [
    { value: 1, label: "Dhaka" },
    { value: 2, label: "Chittagong" },
    { value: 3, label: "Barisal" },
    { value: 4, label: "Khulna" },
    { value: 5, label: "Rajshahi" },
    { value: 6, label: "Rangpur" },
    { value: 7, label: "Sylhet" },
    { value: 8, label: "Mymensingh" },
  ];

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const selectedLabel = division.find(
      (item) => item.value === selectedValue
    )?.label;
    setDivi(selectedValue);
    setSelected(selectedLabel);
  };

  const clearDivision = () => {
    setDivi("");
    setSelected("");
    handleShowAllDataChange();
  };

  return (
    <>
      <p className="mb-3">
        Packages:{" "}
        {filteredDetails?.length > 1 ? (
          <span>{filteredDetails?.length} Packages found</span>
        ) : (
          <span>{filteredDetails?.length} Package found</span>
        )}{" "}
      </p>
      <hr />
      <div>
        <p className="my-3 font-bold">Filter type :</p>
        <div className="flex flex-wrap items-center">
          {selectedDuration ? (
            <>
              <div
                className="flex items-center gap-1 px-3 py-1 mb-3 text-white bg-red-500 rounded-lg cursor-pointer"
                onClick={clearDuration}
              >
                <p>
                  <RxCross2 />
                </p>
                <p>{selectedDuration}</p>
              </div>
              <span className="mx-2">,</span>
            </>
          ) : (
            <></>
          )}
          {selected ? (
            <>
              <div
                className="flex items-center gap-1 px-3 py-1 mb-3 text-white bg-red-500 rounded-lg cursor-pointer"
                onClick={clearDivision}
              >
                <p>
                  <RxCross2 />
                </p>
                <p>{selected}</p>
              </div>
              <span className="mx-2">,</span>
            </>
          ) : (
            <></>
          )}
          {selectedStatus ? (
            <>
              <div className="flex items-center gap-1 px-3 py-1 mb-3 text-white bg-red-500 rounded-lg cursor-pointer">
                <p>
                  <RxCross2 />
                </p>
                <p>{selectedStatus}</p>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <hr />
      </div>
      <div className="py-4">
        <h2 className="mb-2 text-lg font-semibold">Select Travel Duration:</h2>

        <FormControl component="fieldset">
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChanged}
          >
            {durations.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
      <hr />
      <div className="py-4">
        <h2 className="mb-2 text-lg font-semibold">Select Division:</h2>
        <div className="space-y-2">
          <FormControl sx={{ width: "100%" }} size="small">
            <Select
              value={divi}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="" disabled>
                <em>All</em>
              </MenuItem>
              {division.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label} Division
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
};

const Category = ({ selectedStatus, setSelectedStatus, category }) => {
  const cat = [
    {
      title: "Beach",
      icon: "/Assets/icon/beach.png",
    },
    {
      title: "Waterfall",
      icon: "/Assets/icon/waterfall.png",
    },
    {
      title: "Mountain",
      icon: "/Assets/icon/hill.png",
    },
    {
      title: "Historical",
      icon: "/Assets/icon/historical.png",
    },
    {
      title: "Adventure",
      icon: "/Assets/icon/adventure.png",
    },
  ];
  const handleStatusClick = (optionName) => {
    setSelectedStatus((prevSelected) =>
      prevSelected === optionName ? "" : optionName
    );
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {cat?.map((category, i) => (
          <div
            className={` p-4 shadow hover:shadow-lg rounded flex gap-3 justify-between items-center cursor-pointer ${
              selectedStatus === category.title
                ? "bg-blue-800 text-white active"
                : "bg-white"
            }`}
            key={i}
            onClick={() => handleStatusClick(category.title)}
          >
            <h1 style={{ lineHeight: "1.3rem" }}>{category.title}</h1>
            <Image
              src={category.icon}
              alt={category.title}
              width={200}
              height={200}
              className="w-10 h-10"
            />
          </div>
        ))}
      </div>
    </>
  );
};

const Paginations = ({ setPage, page, totalPages }) => {
  const handleChange = (event, value) => {
    setPage(Number(value));
  };

  return (
    <div className="flex justify-center mt-5">
      <Stack spacing={2}>
        <Pagination
          count={parseInt(totalPages)}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handleChange}
          sx={{
            "& .Mui-selected": {
              background: "#A3E635 !important",
            },
          }}
        />
      </Stack>
    </div>
  );
};

const Loader = () => {
  return (
    <>
      <article className="mb-5 transition bg-white shadow md:flex hover:shadow-xl">
        <div className="hidden md:block rotate-180 p-2 [writing-mode:_vertical-lr]">
          <div className="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase">
            <div className="w-12 h-5 bg-gray-300 animate-pulse"></div>
            <div className="flex-1 w-px bg-gray-900/10"></div>
            <div className="w-12 h-5 bg-gray-300 animate-pulse"></div>
          </div>
        </div>

        <div className="sm:basis-56">
          <div className="w-full h-48 bg-gray-300 aspect-square md:h-full animate-pulse"></div>
        </div>

        <div className="flex flex-col justify-between flex-1">
          <div className="p-4 border-s border-gray-900/10 sm:border-l-transparent sm:p-6">
            <div className="w-3/4 h-6 bg-gray-300 animate-pulse"></div>
            <div className="w-5/6 h-4 mt-2 bg-gray-300 animate-pulse"></div>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <div className="block px-5 py-3 text-xs font-bold text-center text-gray-900 uppercase transition bg-lime-300 hover:bg-lime-400 animate-pulse">
              Loading...
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
