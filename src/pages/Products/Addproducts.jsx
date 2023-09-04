// import React from 'react'
// import Topbar2 from '../../layouts/Topbar2';
// import { SiHomeassistantcommunitystore } from 'react-icons/si';
// import { AiOutlineClose } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';

// const Addproducts = () => {
//     const navigate = useNavigate();
//   return (
//     <>
//          <Topbar2 />
//       <div className="bg-white">
//         <div className="flex justify-between">
//           <div className="font-bold m-5 flex items-center text-lg">
//             <SiHomeassistantcommunitystore className="mr-2" />
//             Add Products
//           </div>

//           {/* Close */}
//           <div className="flex mr-4">
//             <div
//               className="flex items-stretch my-4 focus:bg-gray-900"
//               onClick={() => {
//                 navigate("../products");
//               }}
//             >
//               <button className="flex bg-gray-700 p-1 hover:bg-gray-900 text-white text-md items-center px-4 rounded-full focus:outline-none  ">
//                 <AiOutlineClose className="mr-2 scale-125 border bg-white rounded-full fill-gray-900" />
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//         </div>
//     </>
//   )
// }

// export default Addproducts

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Topbar2 from "../../layouts/Topbar2";
import { RxCrossCircled } from "react-icons/rx";
import Basic_info from "./Addeditproductfiles/Basic_info";
// import Prices_Basic_info from "./Addeditproductfiles/Pictures_Basic_info";
import Shipping_Basic_info from "./Addeditproductfiles/Shipping_Basic_info";
import Inventory_Basic_info from "./Addeditproductfiles/Inventory_Basic_info";
import Pictures_Basic_info from "./Addeditproductfiles/Pictures_Basic_info";
import Seo_Basic_info from "./Addeditproductfiles/Seo_Basic_info";
import ProductAttributesBasic_info from "./Addeditproductfiles/ProductAttributesBasic_info";
import Prices_info from "./Addeditproductfiles/Prices_info";
import { AiOutlineCamera, AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdOutlineInventory, MdOutlineLocalShipping } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import { RiProductHuntLine } from "react-icons/ri";
// import Basic_info from "./Basic_info";
// import Prices_Basic_info from "./Prices_Basic_info";
// import Shipping_Basic_info from "./Shipping_Basic_info";
// import Inventory_Basic_info from "./Inventory_Basic_info";
// import Pictures_Basic_info from "./Pictures_Basic_info";
// import Seo_Basic_info from "./Seo_Basic_info";
// import  ProductAttributesBasic_info from "./ProductAttributesBasic_info";

const Addproducts = () => {
    const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("");

  const renderIt = (nextTab) => {
    setSelectedTab(nextTab);
  };

  const renderingIt = () => {
    switch (selectedTab) {
      case "/basic_info":
        return (
          <>
            <Basic_info />
          </>
        );
        break;
      case "/pricesinfo":
        return (
          <>
            <Prices_info />
          </>
        );
        break;
      case "/shipping":
        return (
          <>
            <Shipping_Basic_info />
          </>
        );
        break;
      case "/inventory":
        return (
          <>
            <Inventory_Basic_info />
          </>
        );
        break;
      case "/pictures":
        return (
          <>
            <Pictures_Basic_info />
          </>
        );
        break;
      case "/seo":
        return (
          <>
            <Seo_Basic_info />
          </>
        );
        break;
      case "/productAttribute":
        return (
          <>
            <ProductAttributesBasic_info />
          </>
        );
        break;

      default:
        return (
          <>
            <Basic_info />
          </>
        );
        break;
    }
  };

  return (
    <>
      <section>
        <section>
          <Topbar2 />
        </section>
        {/* <section className="my-5 flex justify-between">
          <section className="flex border border-b-black w-[9rem] mx-4">
            <img
              src="../../public/icons/EditProductLogoOfHome.png"
              width={30}
              height={20}
              alt="editProductLogo"
              className="mr-2"
            />
            <span className="font-semibold">Edit Product</span>
          </section>

          <button className="flex items-center justify-center border border-[#4F46E5] bg-[#4F46E5] sm:w-[6rem] sm:h-[2rem] mx-5 rounded-2xl">
            <RxCrossCircled className="text-xs w-fit rounded-lg  bg-white text-[#4F46E5] mr-3 " />
            <p className="text-sm text-[#fff] ">Close</p>
          </button>
        </section> */}

        <div className="flex justify-between">
          <div className="font-bold pl-1 m-5 flex items-center text-lg">
            <svg className="mr-2" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.75006 13.4167V11.0833H19.2501V13.4167H8.75006ZM4.66673 3.5C4.1531 3.50002 3.65383 3.66952 3.24635 3.9822C2.83887 4.29489 2.54594 4.73329 2.41301 5.22941C2.28007 5.72554 2.31454 6.25167 2.51109 6.7262C2.70763 7.20074 3.05526 7.59716 3.50006 7.854V23.625C3.50006 24.108 3.89206 24.5 4.37506 24.5H7.00006V18.375C7.00006 18.1429 7.09225 17.9204 7.25634 17.7563C7.42044 17.5922 7.643 17.5 7.87506 17.5H12.5417C12.7738 17.5 12.9964 17.5922 13.1604 17.7563C13.3245 17.9204 13.4167 18.1429 13.4167 18.375V24.5H23.6251C23.8571 24.5 24.0797 24.4078 24.2438 24.2437C24.4079 24.0796 24.5001 23.8571 24.5001 23.625V7.854C24.9449 7.59716 25.2925 7.20074 25.489 6.7262C25.6856 6.25167 25.7201 5.72554 25.5871 5.22941C25.4542 4.73329 25.1613 4.29489 24.7538 3.9822C24.3463 3.66952 23.847 3.50002 23.3334 3.5H4.66673ZM4.08339 5.83333C4.08339 5.67862 4.14485 5.53025 4.25425 5.42085C4.36365 5.31146 4.51202 5.25 4.66673 5.25H23.3334C23.4881 5.25 23.6365 5.31146 23.7459 5.42085C23.8553 5.53025 23.9167 5.67862 23.9167 5.83333C23.9167 5.98804 23.8553 6.13642 23.7459 6.24581C23.6365 6.35521 23.4881 6.41667 23.3334 6.41667H4.66673C4.51202 6.41667 4.36365 6.35521 4.25425 6.24581C4.14485 6.13642 4.08339 5.98804 4.08339 5.83333ZM7.87506 9.33333H20.1251C20.3571 9.33333 20.5797 9.42552 20.7438 9.58962C20.9079 9.75371 21.0001 9.97627 21.0001 10.2083V14.2917C21.0001 14.5237 20.9079 14.7463 20.7438 14.9104C20.5797 15.0745 20.3571 15.1667 20.1251 15.1667H7.87506C7.643 15.1667 7.42044 15.0745 7.25634 14.9104C7.09225 14.7463 7.00006 14.5237 7.00006 14.2917V10.2083C7.00006 9.97627 7.09225 9.75371 7.25634 9.58962C7.42044 9.42552 7.643 9.33333 7.87506 9.33333ZM17.2084 17.5H20.1251C20.3571 17.5 20.5797 17.5922 20.7438 17.7563C20.9079 17.9204 21.0001 18.1429 21.0001 18.375V21.2917C21.0001 21.5237 20.9079 21.7463 20.7438 21.9104C20.5797 22.0745 20.3571 22.1667 20.1251 22.1667H17.2084C16.9763 22.1667 16.7538 22.0745 16.5897 21.9104C16.4256 21.7463 16.3334 21.5237 16.3334 21.2917V18.375C16.3334 18.1429 16.4256 17.9204 16.5897 17.7563C16.7538 17.5922 16.9763 17.5 17.2084 17.5ZM11.6667 19.25V24.5H8.75006V19.25H11.6667Z" fill="#27272A"/>
</svg>
            Add Products
          </div>

          {/* Close */}
          <div className="flex mr-4">
            <div
              className="flex items-stretch my-4 focus:bg-gray-900"
              onClick={() => {
                navigate("../products");
              }}
            >
              <button className="flex bg-customPurple text-white text-md items-center px-4 rounded-full focus:outline-none  ">
                <AiOutlineClose className="mr-2 scale-125 border bg-white rounded-full fill-gray-900" />
                Close
              </button>
            </div>
          </div>
        </div>

        <section className="px-6">
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
                {/* <section className="p-[3px]">
                  <img
                    src="../../public/icons/basicInfoLogo.png"
                    width={15}
                    height={15}
                    alt="logoBasic"
                  />
                </section> */}
                <AiOutlineInfoCircle />
                <p className="text-sm ">Basic info</p>
                {/* <p className="text-sm ">Basic info</p> */}
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
                {/* <section className="p-[3px]">
                  <img
                    src="../../public/icons/pricesTabLogoBasicInfo.png"
                    width={15}
                    height={15}
                    alt="logoBasic"
                  />
                </section> */}
               <HiOutlineCurrencyRupee/>
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
                {/* <section className="p-[3px]">
                  <img
                    src="../../public/icons/ShippingTabLogoBasicInfo.png"
                    width={20}
                    height={20}
                    alt="logoBasic"
                  />
                </section> */}
                <MdOutlineLocalShipping/>
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
                {/* <section className="p-[3px]">
                  <img
                    src="../../public/icons/InventoryTabLogoBasicInfo.png"
                    width={15}
                    height={15}
                    alt="logoBasic"
                  />
                </section> */}
                <MdOutlineInventory/>
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
                {/* <section className="p-[3px]">
                  <img
                    src="../../public/icons/CameraIconPicturesBasicInfo.png"
                    width={15}
                    height={15}
                    alt="logoBasic"
                  />
                </section> */}
                <AiOutlineCamera/>
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
                {/* <section className="p-[3px] pt-[4px]">
                  <img
                    src="../../public/icons/SeoTabLogoBasicInfo.png"
                    width={20}
                    height={20}
                    alt="logoBasic"
                  />
                </section> */}
                <TbSeo/>
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
                {/* <section className="p-[3px]">
                  <img
                    src="../../public/icons/ProductAttributeTabLogoBasicInfo.png"
                    width={15}
                    height={15}
                    alt="logoBasic"
                  />
                </section> */}
                <RiProductHuntLine/>
                <p className="text-sm ">Product Attributes</p>
              </button>
            </li>
          </ul>
          <section>{renderingIt()}</section>
        </section>
      </section>
        <div className="flex items-stretch m-6 rounded-md cursor-pointer">
        <button className="flex bg-customPurple rounded-full text-white items-center px-4 py-1 gap-2 focus:outline-none">
          Add Product
          <ion-icon name="send" className="text-white "></ion-icon>
        </button>
      </div>
    </>
  );
};

export default Addproducts;
