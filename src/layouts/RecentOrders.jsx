import React, { useState } from "react";
import { FaSort } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import mock from "../dummy_data2.json";

// Function to style the order status
function getOrderStatus(status) {
  switch (status) {
    case "Active":
      return (
        <span className="flex justify-center items-center capitalize py-1 px-2 rounded-full text-xs font-bold text-green-500 bg-green-100 border border-green-500">
          {status}
        </span>
      );
    case "Deactivated":
      return (
        <span className="flex justify-center items-center capitalize py-1 px-2 rounded-full text-xs font-bold text-red-500 bg-red-100 border border-red-500">
          {status}
        </span>
      );
    default:
      return (
        <span className="flex justify-center items-center capitalize py-1 px-2 rounded-md text-xs font-bold text-gray-600 bg-gray-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
  }
}

// Function for alternate gray and white
function alternate(index) {
  if (index % 2 !== 0) {
    return "bg-white";
  }
}

// Dummy Values
const Customers = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(mock);
  const [order, setOrder] = useState("ASC");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Sort Column
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  // Pagination
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* Table */}
      <div className="rounded-lg overflow-x-auto">
        <div className="flex flex-row gap-4 w-full">
          <div className="pl-4 pb-4 flex-1">
            <div className="rounded-md overflow-x-auto shadow-lg">
              <p className="font-bold bg-white p-4">Recent Orders</p>            
              <table className="w-full">
                <thead>
                  <tr className="bg-white border-b-2">
                    <th>S. No.</th>
                    <th className="pl-5">
                      <div className="flex items-center">
                        Product ID
                        <FaSort
                          className="ml-1 hover:cursor-pointer"
                          onClick={() => {
                            sorting("product_id");
                          }}
                        />
                      </div>
                    </th>
                    <th>
                      <div className="flex items-center">
                        Product name
                        <FaSort
                          className="ml-1 hover:cursor-pointer"
                          onClick={() => {
                            sorting("product_name");
                          }}
                        />
                      </div>
                    </th>
                    <th>
                      <div className="flex items-center">
                        Date
                        <FaSort
                          className="ml-1 hover:cursor-pointer"
                          onClick={() => {
                            sorting("date");
                          }}
                        />
                      </div>
                    </th>
                    <th>
                      <div className="flex items-center">
                        Status
                        <FaSort
                          className="ml-1 hover:cursor-pointer"
                          onClick={() => {
                            sorting("status");
                          }}
                        />
                      </div>
                    </th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((d, index) => (
                    <tr
                      key={startIndex + d.id}
                      className={alternate(startIndex + index+1)}
                    >
                      <td className="pl-4">{startIndex + index + 1}</td>

                      <td className="pl-5">{d.product_id}</td>

                      <td>{d.product_name}</td>

                      <td>{new Date(d.date).toLocaleDateString()}</td>
                      <td>{getOrderStatus(d.status)}</td>
                      <td>
                        <div className="flex items-center underline justify-center hover:cursor-pointer" onClick={() => {
                              navigate("#");
                            }} >
                          <svg className="fill-gray-800 mr-2"
                          width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.99999 0C4.66666 0 1.81999 2.07333 0.666656 5C1.81999 7.92667 4.66666 10 7.99999 10C11.3333 10 14.18 7.92667 15.3333 5C14.18 2.07333 11.3333 0 7.99999 0ZM7.99999 8.33333C6.15999 8.33333 4.66666 6.84 4.66666 5C4.66666 3.16 6.15999 1.66667 7.99999 1.66667C9.83999 1.66667 11.3333 3.16 11.3333 5C11.3333 6.84 9.83999 8.33333 7.99999 8.33333ZM7.99999 3C6.89332 3 5.99999 3.89333 5.99999 5C5.99999 6.10667 6.89332 7 7.99999 7C9.10666 7 9.99999 6.10667 9.99999 5C9.99999 3.89333 9.10666 3 7.99999 3Z" fill="#27272A"/>
                          </svg>
                          View Details
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-between items-center ml-4 mr-4 mb-10">
          <div className="font-semibold">
            Showing {startIndex + 1}-{Math.min(endIndex, data.length)} entries
          </div>
          <div className="flex">
            {/* Previous Page Button */}
            <button
              className="mx-1 px-2 py-1 rounded bg-gray-200 text-gray-700"
              onClick={() =>
                handlePageChange(
                  currentPage === 1 ? totalPages : currentPage - 1
                )
              }
            >
              &lt;
            </button>
            {/* Page Number Button */}
            <button className="mx-1 px-2 py-1 rounded bg-gray-200 text-gray-700">
              Page {currentPage} of {totalPages}
            </button>
            {/* Next Page Button */}
            <button
              className="mx-1 px-2 py-1 rounded bg-gray-200 text-gray-700"
              onClick={() =>
                handlePageChange(
                  currentPage === totalPages ? 1 : currentPage + 1
                )
              }
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
