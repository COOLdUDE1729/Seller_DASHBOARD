import React, { useState } from "react";
import Topbar3 from "../layouts/Topbar3";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineSend } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function FFormElementsInputPlainLgRequired() {
  const navigate = useNavigate();

  return (
    <>
      <Topbar3 />
      <div className="bg-white">
        <div className="flex justify-between">
          <div className="font-bold m-5 flex items-center text-lg">
            My Account
          </div>

          {/* Close */}
          <div className="flex mr-4">
            {/* <div
              className="flex items-stretch my-4 focus:bg-gray-900"
              onClick={() => {
                navigate("../");
              }}
            >
              <button className="flex bg-gray-700 p-1 hover:bg-gray-900 text-white text-md items-center px-4 rounded-full focus:outline-none  ">
                <AiOutlineClose className="mr-2 scale-125 border bg-white rounded-full fill-gray-900" />
                Close
              </button>
            </div> */}
          </div>
        </div>

        {/* Input Fields */}
        {/* <div className="ml-5 font-semibold text-lg">Basic Information</div> */}
        <div className="ml-5 mt-5 flex  gap-20">
          <div className="">
            <label className="block mb-2">First Name</label>
            <input
              class="input-field gap-5"
              type="text"
              placeholder="Enter Your name"
            />
          </div>
          <div className="">
            <label className="block mb-2">Last Name</label>
            <input
              class="input-field gap-5"
              type="text"
              placeholder="Enter Your Last name"
            />
          </div>
          <div className="">
            <label className="block mb-2">E-Mail</label>
            <input
              class="input-field  "
              type="email"
              placeholder="name@gmail.com"
            />
          </div>
          {/* <div className="">
            <label className="block mb-2">Contact no.</label>
            <input
              class="input-field"
              type="tel"
              placeholder="+91 - 7983163574"
            />
          </div> */}
        </div>

        <div className="ml-5 mt-7 flex  gap-20">
          <div className="">
            <label className="block mb-2">Password</label>
            <input
              class="input-field gap-5"
              type="text"
              placeholder="******"
            />
          </div>
          <div className="">
            <label className="block mb-2">Confirm Password</label>
            <input
              class="input-field gap-5"
              type="text"
              placeholder="*******"
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
          {/* <div className="">
            <label className="block mb-2">Contact no.</label>
            <input
              class="input-field"
              type="tel"
              placeholder="+91 - 7983163574"
            />
          </div> */}
        </div>

      
        {/* <div className="ml-5 mt-5 flex flex-col gap-5">
          <div>
            <label className="block mb-2">Country</label>
            <select name="Country" id="" className="mr-20">
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="America">America</option>
              <option value="Canada">Canada</option>
            </select>
          </div>
          <div className="w-[20%]">
            <label className="block mb-2">State</label>
            <input class="input-field" type="text" placeholder="State" />
          </div>
          <div className="w-[20%]">
            <label className="block mb-2">District</label>
            <input class="input-field" type="text" placeholder="District" />
          </div>
        </div>
      */}
        {/* Submit Button */}
        <div
          className="flex items-stretch m-5 focus:bg-gray-900"
          onClick={() => {
            navigate("../");
          }}
        >
          <button className="flex bg-gray-700 p-1 hover:bg-gray-900 text-white text-md items-center px-4 rounded-full focus:outline-none  ">
            Submit
            <MdOutlineSend className="ml-2 scale-125  fill-white" />
          </button>
        </div>
      </div>
    </>
  );
}
