import React, { useState, useEffect } from "react";
import Topbar2 from "../../layouts/Topbar2";
import { BsImageFill } from "react-icons/bs";
import Categorytable from "./Categorytable";
import axios from "axios";
const Category = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [lastName, setLastName] = useState("");
  const [parentCategory, setParentCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedParentCategory, setSelectedParentCategory] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  const handleAddCategory = () => {
    // Prepare the request payload
    const newCategory = {
      uploadedFile,
      lastName,
      parentCategory,
    };

    // Send a POST request to the backend API
    axios
      .post("apiapi/add_category", newCategory)
      .then((response) => {
        // Handle the successful response
        console.log("Category added:", response.data);

        // Clear the input fields
        setUploadedFile(null);
        setLastName("");
        setParentCategory("");
      })
      .catch((error) => {
        // Handle the error
        console.error("Error adding category:", error);
      });
  };

  useEffect(() => {
    fetchParentCategories();
  }, []);

  const fetchParentCategories = async () => {
    try {
      const response = await fetch("apiapi/parent_categories");
      const data = await response.json();
      setParentCategories(data);
    } catch (error) {
      console.error("Error fetching parent categories", error);
    }
  };

  const handleParentCategoryChange = (e) => {
    setSelectedParentCategory(e.target.value);
  };

  return (
    <>
      <Topbar2 />
      <div className="flex ml-5 mt-4">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_56_8871)">
            <path
              d="M13.9999 2.33333L7.58325 12.8333H20.4166L13.9999 2.33333Z"
              fill="#27272A"
            />
            <path
              d="M20.4167 25.6667C23.3162 25.6667 25.6667 23.3162 25.6667 20.4167C25.6667 17.5172 23.3162 15.1667 20.4167 15.1667C17.5173 15.1667 15.1667 17.5172 15.1667 20.4167C15.1667 23.3162 17.5173 25.6667 20.4167 25.6667Z"
              fill="#27272A"
            />
            <path d="M3.5 15.75H12.8333V25.0833H3.5V15.75Z" fill="#27272A" />
          </g>
          <defs>
            <clipPath id="clip0_56_8871">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div className="font-bold ml-2 items-center text-lg">Categories</div>
      </div>

      <div className="ml-5 mt-1 flex  gap-20">
        <div className="flex items-center gap-0 ">
          <input type="file" onChange={handleFileChange} />
        </div>
        <div className="">
          <label className="block mb-2">Last Name</label>
          <input
            class="input-field gap-5"
            type="text"
            placeholder="Enter Your Last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        {/* <div className="">
          <label className="block mb-2">E-Mail</label>
          <input
            class="input-field  "
            type="email"
            placeholder="name@gmail.com"
          />
        </div> */}

        <div>
          <label className="block mb-2">Parent Categories</label>
          <select
            name="Categories"
            id=""
            className="mr-20"
            value={selectedParentCategory}
            onChange={handleParentCategoryChange}
          >
            {parentCategory.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-stretch ml-5 mt-2 focus:bg-gray-900">
        <button
          className="flex bg-customPurple rounded-md text-white items-center px-4 py-2 gap-2 focus:outline-none"
          onClick={handleAddCategory}
        >
          Add Categories
          <ion-icon name="send" className="text-white "></ion-icon>
        </button>
      </div>

      <div className="flex items-stretch ml-5 mt-2 focus:bg-gray-900">
        <input
          type="text"
          placeholder="Search here..."
          className="sm:px-4 px-2 sm:py-2 py-0 rounded-l-md focus:outline-gray-900"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="bg-customPurple text-white font-bold py-2 px-4 rounded-r-md focus:outline-none">
          <ion-icon name="search-outline" className="text-white"></ion-icon>
        </button>
      </div>

      <div className="mt-4">
        <Categorytable searchQuery={searchQuery} />
      </div>
    </>
  );
};

export default Category;
