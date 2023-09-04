import React, { useState, useEffect } from "react";

const Prices_info = () => {
  const [price, setPrice] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const [isDiscountAllowed, setIsDiscountAllowed] = useState(false);
  const [discount, setDiscount] = useState('');

  useEffect(() => {
    // Fetch operations
    // Perform any necessary fetching operations here
  }, []);

  const handleSave = () => {
    // Perform post operation to save the data
    const data = {
      price,
      oldPrice,
      isDiscountAllowed,
      discount
    };
    // Perform the post operation here using the data object
  };

  return (
    <>
      <div className="font-semibold mt-2">Prices</div>
      <div className="ml-0 mt-5 flex gap-20">
        <div>
          <label className="block mb-2">Price</label>
          <input
            className="input-field"
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2">Old Price</label>
          <input
            className="input-field"
            type="number"
            placeholder="Enter old price"
            value={oldPrice}
            onChange={(e) => setOldPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <input
          type="checkbox"
          checked={isDiscountAllowed}
          onChange={(e) => setIsDiscountAllowed(e.target.checked)}
        />
        <label htmlFor="">Is Discount Allowed</label>
      </div>

      <div className="mt-4">
        <label className="block mb-2">Discount</label>
        <input
          className="input-field"
          type="number"
          placeholder="Enter Discount"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
      </div>

      <button className="bg-customPurple text-white font-bold py-2 px-4 mt-4 rounded-md focus:outline-none" onClick={handleSave}>
        Save
      </button>
    </>
  );
};

export default Prices_info;
