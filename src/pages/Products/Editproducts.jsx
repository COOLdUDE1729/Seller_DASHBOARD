import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Topbar2 from "../../layouts/Topbar2";
import { RxCrossCircled } from "react-icons/rx";
import Basic_info from "./Addeditproductfiles/Basic_info";
import Shipping_Basic_info from "./Addeditproductfiles/Shipping_Basic_info";
import Inventory_Basic_info from "./Addeditproductfiles/Inventory_Basic_info";
import Pictures_Basic_info from "./Addeditproductfiles/Pictures_Basic_info";
import Seo_Basic_info from "./Addeditproductfiles/Seo_Basic_info";
import ProductAttributesBasic_info from "./Addeditproductfiles/ProductAttributesBasic_info";
import Prices_info from "./Addeditproductfiles/Prices_info";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineCamera, AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdOutlineInventory, MdOutlineLocalShipping } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import { RiProductHuntLine } from "react-icons/ri";

const Editproducts = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("");
  const [productData, setProductData] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/products/:id"); // Replace with the actual API endpoint to fetch product data
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderIt = (nextTab) => {
    setSelectedTab(nextTab);
  };

  const renderingIt = () => {
    switch (selectedTab) {
      case "/basic_info":
        return (
          <Basic_info productData={productData} />
        );
      case "/pricesinfo":
        return (
          <Prices_info productData={productData} />
        );
      case "/shipping":
        return (
          <Shipping_Basic_info productData={productData} />
        );
      case "/inventory":
        return (
          <Inventory_Basic_info productData={productData} />
        );
      case "/pictures":
        return (
          <Pictures_Basic_info productData={productData} />
        );
      case "/seo":
        return (
          <Seo_Basic_info productData={productData} />
        );
      case "/productAttribute":
        return (
          <ProductAttributesBasic_info productData={productData} />
        );
      default:
        return (
          <Basic_info productData={productData} />
        );
    }
  };

  return (
    <>
      <section>
        <Topbar2 />
      </section>
      <div className="flex justify-between">
        <div className="font-bold m-5 flex items-center text-lg">
          <BsPeopleFill className="mr-2" size={22} />
          Edit Products
        </div>
        <div className="flex mr-4">
          <div
            className="flex items-stretch my-4 focus:bg-gray-900"
            onClick={() => {
              navigate("../products");
            }}
          >
            <button className="flex bg-gray-700 p-1 hover:bg-gray-900 text-white text-md items-center px-4 rounded-full focus:outline-none">
              <AiOutlineClose className="mr-2 scale-125 border bg-white rounded-full fill-gray-900" />
              Close
            </button>
          </div>
        </div>
      </div>
      <section className="px-7">
        <ul className="flex">
          <li className="w-fit">
            <button
              className={
                selectedTab === "/"
                  ? "flex  p-1 border-2 border-t-gray-500 border-x-gray-500 rounded-t-[5px] items-center gap-1 px-2"
                  : "flex border-2 opacity-[0.4] p-1 border-y-black border-x-black rounded-t-[5px] items-center gap-1 px-2"
              }
              onClick={() => {
                renderIt("/");
              }}
            >
              <AiOutlineInfoCircle />
              <p className="text-sm ">Basic info</p>
            </button>
          </li>
          <li className="w-fit">
            <button
              className={
                selectedTab === "/pricesinfo"
                  ? "flex  p-1 border-2 border-t-gray-500 border-x-gray-500 rounded-t-[5px] items-center gap-1 px-2"
                  : "flex border-2 opacity-[0.4] p-1 border-y-black border-x-black rounded-t-[5px] items-center gap-1 px-2"
              }
              onClick={() => {
                renderIt("/pricesinfo");
              }}
            >
              <HiOutlineCurrencyRupee />
              <p className="text-sm ">Prices</p>
            </button>
          </li>
          <li className="w-fit">
            <button
              className={
                selectedTab === "/shipping"
                  ? "flex  p-1 border-2 border-t-gray-500 border-x-gray-500 rounded-t-[5px] items-center gap-1 px-2"
                  : "flex border-2 opacity-[0.4] p-1 border-y-black border-x-black rounded-t-[5px] items-center gap-1 px-2"
              }
              onClick={() => {
                renderIt("/shipping");
              }}
            >
              <MdOutlineLocalShipping />
              <p className="text-sm ">Shipping</p>
            </button>
          </li>
          <li className="w-fit">
            <button
              className={
                selectedTab === "/inventory"
                  ? "flex  p-1 border-2 border-t-gray-500 border-x-gray-500 rounded-t-[5px] items-center gap-1 px-2"
                  : "flex border-2 opacity-[0.4] p-1 border-y-black border-x-black rounded-t-[5px] items-center gap-1 px-2"
              }
              onClick={() => {
                renderIt("/inventory");
              }}
            >
              <MdOutlineInventory />
              <p className="text-sm ">Inventory</p>
            </button>
          </li>
          <li className="w-fit">
            <button
              className={
                selectedTab === "/pictures"
                  ? "flex  p-1 border-2 border-t-gray-500 border-x-gray-500 rounded-t-[5px] items-center gap-1 px-2"
                  : "flex border-2 opacity-[0.4] p-1 border-y-black border-x-black rounded-t-[5px] items-center gap-1 px-2"
              }
              onClick={() => {
                renderIt("/pictures");
              }}
            >
              <AiOutlineCamera />
              <p className="text-sm ">Pictures</p>
            </button>
          </li>
          <li className="w-fit">
            <button
              className={
                selectedTab === "/seo"
                  ? "flex  p-1 border-2 border-t-gray-500 border-x-gray-500 rounded-t-[5px] items-center gap-1 px-2"
                  : "flex border-2 opacity-[0.4] p-1 border-y-black border-x-black rounded-t-[5px] items-center gap-1 px-2"
              }
              onClick={() => {
                renderIt("/seo");
              }}
            >
              <TbSeo />
              <p className="text-sm ">SEO</p>
            </button>
          </li>
          <li className="w-fit">
            <button
              className={
                selectedTab === "/productAttribute"
                  ? "flex  p-1 border-2 border-t-gray-500 border-x-gray-500 rounded-t-[5px] items-center gap-1 px-2"
                  : "flex border-2 opacity-[0.4] p-1 border-y-black border-x-black rounded-t-[5px] items-center gap-1 px-2"
              }
              onClick={() => {
                renderIt("/productAttribute");
              }}
            >
              <RiProductHuntLine />
              <p className="text-sm ">Product Attributes</p>
            </button>
          </li>
        </ul>
        <section>{renderingIt()}</section>
      </section>
    </>
  );
};

export default Editproducts;
