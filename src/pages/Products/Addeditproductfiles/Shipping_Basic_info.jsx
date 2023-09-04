import React, { useState, useEffect } from "react";
import { RxCrossCircled } from "react-icons/rx";
import axios from "axios";

const Shipping_Basic_info = () => {
  const [shippingOptions, setShippingOptions] = useState([]);
  const [selectedShippingOption, setSelectedShippingOption] = useState("");

  useEffect(() => {
    fetchShippingOptions();
  }, []);

  const fetchShippingOptions = async () => {
    try {
      const response = await axios.get("backend/shipping-options");
      setShippingOptions(response.data.options);
    } catch (error) {
      console.error("Error fetching shipping options:", error);
    }
  };

  const handleShippingOptionChange = (option) => {
    setSelectedShippingOption(option);
  };

  return (
    <>
      <section>
        <h2 className="font-semibold sm:m-4">Pricing</h2>

        <section>
          <ul className="flex">
            <li className="mx-2">
              <input type="radio" name="radioBtnBasic" />
              <label className="text-sm font-[500]">Show on Home page</label>
            </li>
            <li className="mx-2">
              <input type="radio" name="radioBtnBasic" />
              <label className="text-sm font-[500]">Mark as New</label>
            </li>
          </ul>
        </section>

        <section className="m-1 p-1 sm:w-1/3 sm:h-[6rem] sm:m-4 flex flex-col justify-around">
          <p className="font-bold text-xs">Shipping Charges</p>
          <input
            type="text"
            name="productName"
            id="productName"
            placeholder="Enter Price"
            className="bg-transparent border border-b-black text-sm p-1"
          />
        </section>

        <section className="m-1 p-1 sm:w-1/3 sm:h-[6rem] sm:m-4 flex flex-col justify-around">
          <p className="font-bold text-xs">Shipping Charges</p>
          <section className="flex">
            {shippingOptions.map((option) => (
              <section
                key={option.id}
                className={`flex border ${
                  selectedShippingOption === option.id
                    ? "border-green-500 bg-green-500 text-white"
                    : "border-gray-500 bg-gray-500 hover:bg-gray-700 text-white"
                } rounded-md w-fit mx-1 items-center`}
                onClick={() => handleShippingOptionChange(option.id)}
              >
                <span className="text-xs mx-1">{option.name}</span>
                <RxCrossCircled className="text-xs" />
              </section>
            ))}
          </section>
        </section>

        <section className="flex">
          <section className="sm:w-1/4 m-1 h-[5rem] sm:m-4 border border-b-black">
            <p className="font-semibold text-xs sm:m-4">Status</p>

            <select
              name="shippingDrop"
              id="shippingDrop"
              className="bg-transparent text-xs px-3 w-full items-center"
            >
              <option className="text-xs">
                <p>1</p>
              </option>
              <option className="text-xs">
                <p>2</p>
              </option>
              <option className="text-xs">
                <p>3</p>
              </option>
              <option className="text-xs">
                <p>4</p>
              </option>
            </select>
          </section>
        </section>
      </section>
    </>
  );
};

export default Shipping_Basic_info;
