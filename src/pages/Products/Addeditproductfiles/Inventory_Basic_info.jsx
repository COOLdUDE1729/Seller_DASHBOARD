import React, { useState, useEffect } from "react";

const Inventory_Basic_info = () => {
  const [inventoryMethod, setInventoryMethod] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [orderMinQuantity, setOrderMinQuantity] = useState("");
  const [orderMaxQuantity, setOrderMaxQuantity] = useState("");

  useEffect(() => {
    fetchInventoryData();
  }, []);

  const fetchInventoryData = async () => {
    try {
      // Fetch inventory method options
      const methodResponse = await fetch("apiapi/inventory_methods");
      const methodData = await methodResponse.json();
      // Set the fetched inventory method options to state
      // setInventoryMethodOptions(methodData);

      // Fetch warehouse options
      const warehouseResponse = await fetch("apiapi/warehouses");
      const warehouseData = await warehouseResponse.json();
      // Set the fetched warehouse options to state
      // setWarehouseOptions(warehouseData);

      // Fetch existing inventory data
      const inventoryResponse = await fetch("apiapi/inventory");
      const inventoryData = await inventoryResponse.json();
      // Set the fetched inventory data to state
      // setInventoryData(inventoryData);
    } catch (error) {
      console.error("Error fetching inventory data", error);
    }
  };

  const handleAddInventory = async () => {
    const inventoryData = {
      inventoryMethod,
      warehouse,
      orderMinQuantity,
      orderMaxQuantity,
    };

    try {
      const response = await fetch("apiapi/add_inventory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inventoryData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("New inventory added:", responseData);
      } else {
        console.error("Error in adding inventory");
      }
    } catch (error) {
      console.error("Error adding inventory", error);
    }
  };

  return (
    <>
      <section>
        <h2 className="font-semibold sm:m-4 "> Inventory</h2>

        <section className="flex ">
          <section className=" sm:w-1/4  h-[5rem] sm:m-4 border border-b-black">
            <p className="font-semibold text-xs sm:m-4">Inventory Method</p>
            <select
              name="inventoryDrop"
              id="inventoryDrop"
              className="bg-transparent text-xs px-3"
              value={inventoryMethod}
              onChange={(e) => setInventoryMethod(e.target.value)}
            >
              <option value="">Select Inventory Method</option>
              {/* Render inventory method options */}
              {/* Example: inventoryMethodOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>) */}
            </select>
          </section>
        </section>

        <section className="flex ">
          <section className=" sm:w-1/4  h-[5rem] sm:m-4 border border-b-black">
            <p className="font-semibold text-xs sm:m-4">Warehouse</p>
            <select
              name="inventoryWarehouseDrop"
              id="inventoryWarehouseDrop"
              className="bg-transparent text-xs px-3"
              value={warehouse}
              onChange={(e) => setWarehouse(e.target.value)}
            >
              <option value="">Select Warehouse</option>
              {/* Render warehouse options */}
              {/* Example: warehouseOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>) */}
            </select>
          </section>
        </section>

        <section className="sm:m-4">
          <ul className="flex">
            <li className="mx-2">
              <input
                type="radio"
                name="radioBtnBasic"
                className="mt-[1px]"
              />
              <label className="text-xs font-[500] ">
                Bound To Stock Quantity
              </label>
            </li>
            <li className="mx-2">
              <input
                type="radio"
                name="radioBtnBasic"
                className="mt-[1px]"
              />
              <label className="text-xs  font-[500]">
                Display Stock Quantity
              </label>
            </li>
          </ul>
        </section>

        <section className="m-1 p-1 sm:w-1/3 sm:h-[6rem] sm:m-4 flex flex-col justify-around">
          <p className="font-semibold text-xs">Order Minimum Cart Quantity</p>
          <input
            type="text"
            name="cartQuantityMin"
            id="cartQuantityMin"
            placeholder="1"
            className="bg-transparent border border-b-black text-sm p-1"
            value={orderMinQuantity}
            onChange={(e) => setOrderMinQuantity(e.target.value)}
          />
        </section>

        <section className="m-1 p-1 sm:w-1/3 sm:h-[6rem] sm:m-4 flex flex-col justify-around">
          <p className="font-semibold text-xs">Order Maximum Cart Quantity</p>
          <input
            type="text"
            name="cartQuantityMax"
            id="cartQuantityMax"
            placeholder="7"
            className="bg-transparent border border-b-black text-sm p-1"
            value={orderMaxQuantity}
            onChange={(e) => setOrderMaxQuantity(e.target.value)}
          />
        </section>

        <section className="sm:m-4">
          <button
            className="flex items-center justify-center border border-[#4F46E5] bg-[#4F46E5] sm:w-[10rem] sm:h-[2rem] rounded-2xl"
            onClick={handleAddInventory}
          >
            <p className="text-sm text-[#fff] ">Add Inventory</p>
            <img
              className="ml-2"
              src="../../public/icons/Basic_infor_EditProduct.png"
              width={15}
              height={15}
              alt="send"
            />
          </button>
        </section>
      </section>
    </>
  );
};

export default Inventory_Basic_info;
