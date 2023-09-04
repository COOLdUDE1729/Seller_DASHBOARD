// import { constants } from "buffer";
import React, { useState, useEffect } from "react";

const Basic_info = () => {

    const [productName, setProductName] = useState("");
    const [manufacturers, setManufacturers] = useState([]);
    const [selectedManufacturer, setSelectedManufacturer] = useState("");
    const [status, setStatus] = useState("");
    const [vendors, setVendors] = useState([]);
    const [selectedVendor, setSelectedVendor] = useState("");
    const [tags, setTags] = useState("");
    const [short, setShort] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [sku, setSku] = useState("");
    const [long, setLong] = useState("");
    const [category, setCategory] = useState("");
    const [showonhome, setShowonhome] = useState(false);
    const [marknew, setMarknew] = useState(false);
    const [reviewallow, setReviewallow] = useState(false);

    useEffect(()=>{

        fetchManufacturers();
        fetchVendors();
        fetchStatus();

    },[]);

    const fetchManufacturers =()=>{
        fetch("apiapi.manufacturer")
        .then((response)=>response.json())
        .then((data)=>{
            setManufacturers(data);
        })
        .catch((error) => {
            console.error("Error fetching manufacturers:", error);
          });
    }

    const fetchVendors=()=>{
        fetch("apiapi.vendor")
        .then((response)=>response.json())
        .then((data)=>{
            setVendors(data);
        })
        .catch((error)=>
        {
            console.error("Error fetching vendors:", error);
        });
    }

    const fetchStatus=()=>{
        fetch("apiapi.status")
        .then((response)=>response.json()).then((data)=>{
            setStatus(data);
        })
        .catch((error)=>
        {
            console.error("Error status vendors:", error);
        });
    }

  return (
    <>
      <section className="w-full">
        <section className="flex w-full justify-around">
          <section className="m-1 p-1 sm:w-1/3 sm:h-[6rem] sm:m-4 flex flex-col justify-around">
            <p className="font-bold text-xs">Product Name</p>
            <input
              type="text"
              name="productName"
              id="productName"
              placeholder="Enter Business name"
              className="bg-transparent border border-b-black text-sm p-1"
              value={productName}
              onClick={(e)=>setProductName(e.target.value)}
            />
          </section>

          <section className=" m-1 sm:w-1/3  p-1 sm:m-4 flex flex-col justify-around ">
            <p className="font-bold text-xs m-2"> Short Description</p>
            <textarea
              rows={3}
              cols={30}
              className="p-2 m-1 bg-transparent text-sm border border-slate-400 rounded-lg"
              placeholder="Enter about file"
              value={short}
              onChange={(e) => setShort(e.target.value)}
            ></textarea>
          </section>

          <section className=" w-1/3 m-1 p-2  sm:m-4">
            <p className="font-bold text-xs m-2"> Full Description</p>
            <textarea
              rows={3}
              cols={30}
              className="p-2 m-1 text-sm border bg-transparent border-slate-400 rounded-lg"
              placeholder="Enter about file"
              value={long}
              onChange={(e) => setLong(e.target.value)}
            />
          </section>

          {/* copy of the above done and dusted desctiption code */}
        </section>

        <section className="flex w-full justify-around ">
          <section className=" sm:w-1/3 m-1 h-[5rem]  sm:p-2">
            <p className="font-semibold text-xs sm:m-4">Manufacturer</p>
            <select
              name="manufacturerDrop"
              id="manufacturerDrop"
              placeholder="Select manufacturer"
              className="bg-transparent  text-xs px-3 "
              value={selectedManufacturer}
              onChange={(e) => setSelectedManufacturer(e.target.value)}
            >

              <option value="">Select manufacturer</option>
              {manufacturers.map((manufacturer, index) => (
                <option key={index} value={manufacturer}>
                  {manufacturer}
                </option>
              ))}
            </select>
          </section>

          <section className=" sm:w-1/3 h-[5rem] m-1 sm:p-2">
            <p className="font-semibold text-xs sm:m-4">Vendor</p>
            <select
              name="manufacturerDrop"
              id="manufacturerDrop"
              placeholder="Select manufacturer"
              className="bg-transparent text-xs px-3 py-2"
              value={selectedVendor}
              onChange={(e) => setSelectedVendor(e.target.value)}
            >
              <option value="">Select vendor</option>
              {vendors.map((vendor, index) => (
                <option key={index} value={vendor}>
                  {vendor}
                </option>
              ))}
            </select>
          </section>

          <section className="sm:w-1/3 sm:h-[5rem] flex flex-col justify-around m-1 sm:m-4 sm:p-2">
            <p className="font-bold text-xs pb-3">Categories</p>
            <input
              type="text"
              name="productName"
              id="productName"
              placeholder="Enter category"
              className="bg-transparent border border-b-black text-sm p-1 "
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </section>
        </section>

        <section className="flex">
          <section className=" sm:w-1/3 m-1 h-[5rem]  sm:p-2">
            <p className="font-semibold text-xs sm:m-4">Status</p>
            <select
              name="manufacturerDrop"
              id="manufacturerDrop"
              placeholder="Select manufacturer"
              className="bg-transparent  text-xs px-3 "
            >
              <option className="text-xs">
                {" "}
                <p>Select manufacturer</p>
              </option>
            </select>
          </section>

          <section className="sm:w-1/3 m-1 h-[5rem] sm:p-2">
        <p className="font-semibold text-xs sm:m-4">Start Date</p>
        <input
          type="date"
          placeholder="select date"
          className="bg-transparent tex-xs border border-b-black"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </section>

      <section className="sm:w-1/3 m-1 h-[5rem] sm:p-2">
        <p className="font-semibold text-xs sm:m-4">End Date</p>
        <input
          type="date"
          placeholder="select date"
          className="bg-transparent tex-xs border border-b-black"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </section>
        </section>

        <section className="flex w-full justify-around">
          <section className="sm:m-4 p-1 sm:w-1/3 sm:h-[6rem] flex flex-col justify-around">
            <p className="font-bold text-xs">Tags</p>
            <input
              type="text"
              name="productName"
              id="productName"
              placeholder="Enter tags"
              className="bg-transparent border border-b-black text-sm p-1"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </section>

          <section className=" sm:m-4 sm:w-1/3  p-1 flex flex-col justify-around ">
            <p className="font-bold text-xs m-2">Sku</p>
            <input
              type="text"
              name="productName"
              id="productName"
              placeholder="Enter tags"
              className="bg-transparent border border-b-black text-sm p-1"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
            />
          </section>

          <section className=" w-1/3 sm:m-4 p-2">
            <ul className="">
              <li>
              <input
                  type="checkbox"
                  checked={showonhome}
                  onChange={(e) => setShowonhome(e.target.checked)}
                  className="my-0 text-xs"
                />
                <label className="text-xs ">Show on Home page</label>
              </li>
              <li>
              <input
                  type="checkbox"
                  checked={marknew}
                  onChange={(e) => setMarknew(e.target.checked)}
                  className="my-0 text-xs"
                />
                <label className="text-xs ">Mark as New</label>
              </li>
              <li>
              <input
                  type="checkbox"
                  checked={reviewallow}
                  onChange={(e) => setReviewallow(e.target.checked)}
                  className="my-0 text-xs"
                />
                <label className="text-xs ">Allow Customer Reviews</label>
              </li>
            </ul>
          </section>

          {/* copy of the above done and dusted desctiption code */}
        </section>

        {/* <section className="sm:m-4">
            <button className="flex items-center justify-center border bg-gray-700 hover:bg-gray-900 sm:w-[10rem] sm:h-[2rem] rounded-2xl">
                <p className="text-sm text-[#fff] ">Edit Product</p>
                <ion-icon name="send" className="text-white "></ion-icon>
            </button>
        </section> */}
      </section>
    </>
  );
};

export default Basic_info;
