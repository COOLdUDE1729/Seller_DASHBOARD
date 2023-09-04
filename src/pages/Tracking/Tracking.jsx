import React, { useState } from "react";
import Topbar2 from "../../layouts/Topbar2";
import { HiTrash, HiPencil } from "react-icons/hi";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { FaSort } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import mock from "../../dummy_data2.json";

// Function to style the order status
// function getOrderStatus(status) {
//   switch (status) {
//     case "Active":
//       return (
//         <span className="flex justify-center items-center capitalize py-1 px-2 rounded-full text-xs font-bold text-green-500 bg-green-100 border border-green-500">
//           {status}
//         </span>
//       );
//     case "Deactivated":
//       return (
//         <span className="flex justify-center items-center capitalize py-1 px-2 rounded-full text-xs font-bold text-red-500 bg-red-100 border border-red-500">
//           {status}
//         </span>
//       );
//     default:
//       return (
//         <span className="flex justify-center items-center capitalize py-1 px-2 rounded-md text-xs font-bold text-gray-600 bg-gray-100">
//           {status.replaceAll("_", " ").toLowerCase()}
//         </span>
//       );
//   }
// }

// Function for alternate gray and white
function alternate(index) {
  if (index % 2 !== 0) {
    return "bg-white";
  }
}

// Dummy Values
const Tracking = () => {
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

  const [showFilter, setShowFilter] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  const handleCalendarToggle = () => {
    setShowCalendar(!showCalendar);
  };

  const handleStatusToggle = () => {
    setShowStatus(!showStatus);
  };

  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleFilterSubmit = () => {
    // Apply filter logic here
    const filteredData = mock.filter((d) => {
      return (
        (selectedStatus === "" ||
          d.status.toLowerCase() === selectedStatus.toLowerCase()) &&
        (selectedDate === "" ||
          new Date(d.date).toLocaleDateString() ===
            selectedDate.toLocaleDateString())
      );
    });
    setData(filteredData);
    setShowFilter(false);
  };

  return (
    <>
      <Topbar2 />
      <div className="flex ml-5 mt-4">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.8327 9.33333H23.3327L26.8327 14.0653V21H24.4585C24.318 21.9719 23.8321 22.8608 23.0897 23.5036C22.3472 24.1464 21.3981 24.5003 20.416 24.5003C19.434 24.5003 18.4848 24.1464 17.7424 23.5036C16.9999 22.8608 16.514 21.9719 16.3735 21H10.4585C10.3198 21.9733 9.8346 22.864 9.09197 23.5083C8.34935 24.1526 7.39919 24.5073 6.41602 24.5073C5.43284 24.5073 4.48268 24.1526 3.74006 23.5083C2.99743 22.864 2.51221 21.9733 2.37352 21H1.16602V6.99999C1.16602 6.69058 1.28893 6.39383 1.50772 6.17504C1.72652 5.95624 2.02326 5.83333 2.33268 5.83333H18.666C18.9754 5.83333 19.2722 5.95624 19.491 6.17504C19.7098 6.39383 19.8327 6.69058 19.8327 6.99999V9.33333ZM19.8327 11.6667V15.1667H24.4994V14.8342L22.1567 11.6667H19.8327Z" fill="black"/>
</svg>
        <div className="font-bold ml-2 items-center text-lg">Tracking</div>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:scale-75%">
        {/* Search */}
        <div className="flex items-stretch m-4 focus:bg-gray-900 ">
          <input
            type="text"
            placeholder="Search here..."
            className="sm:px-4 px-2 sm:py-2 py-0 rounded-l-md focus:outline-gray-900 shadow-2xl"
          />
          <button className="bg-customPurple text-white font-bold py-2 px-4 rounded-r-md focus:outline-none">
            <ion-icon name="search-outline" className="text-white"></ion-icon>
          </button>
        </div>

        {/* Filter */}
        <div className="flex mr-4">
           <div className="relative flex items-stretch my-4 focus:bg-gray-900">
            <button
              className="flex bg-customPurple text-white items-center px-4 rounded-md focus:outline-none"
              onClick={handleFilterToggle}
            >
              <ion-icon name="filter-outline" className="text-white"></ion-icon>
              Filter
            </button>
          </div> 
        </div>
      </div>
       {/* Filter Dropdown  */}
       {showFilter && (
        <div className="absolute mt-28 right-4 top-16 w-60 bg-white rounded-md shadow-md">
          <div>
            <div
              className="flex items-center justify-between p-1"
              onClick={handleStatusToggle}
            >
              <label className="p-2 text-gray-800 font-normal">
                Select Status
              </label>
              {showStatus ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </div>
            <hr className="h-px bg-black"/>
            {showStatus && (
              <div className="text-gray-700 mb-2">
                <div className="flex my-2 items-center pt-1 pb-2 px-1 justify-between border-b border-black text-sm">
                  <label htmlFor="active" className="ml-2">
                    Active
                  </label>
                  <input className="rounded-full text-black" type="checkbox" id="active"
                    name="status"
                    value="active"
                    checked={selectedStatus === "active"}
                    onChange={() => handleStatusChange("active")}/>
                </div>
                <div className="flex my-2 items-center pt-1 pb-2 px-1 justify-between border-b border-black text-sm">
                  <label htmlFor="deactive" className="ml-2">
                    Deactive
                  </label>
                  <input className="rounded-full text-black" type="checkbox"
                    id="deactive"
                    name="status"
                    value="deactivated"
                    checked={selectedStatus === "deactivated"}
                    onChange={() => handleStatusChange("deactivated")}/>
                </div>
              </div>
            )}
            <div
              className="flex items-center justify-between pt-1 pb-2 px-1"
              onClick={handleCalendarToggle}
            >
              <label className="px-2 text-gray-800 font-normal hover:cursor-pointer">
                By Date
              </label>
              {showCalendar ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </div>
            <div>
              {showCalendar && (
                <div className="relative">
                  <Calendar onChange={handleDateChange} value={selectedDate} />
                </div>
              )}
            </div>
            <div className="flex justify-center mb-2">
              <button
                className="bg-customPurple text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
                onClick={handleFilterSubmit}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}  


      {/* Table */}
      <div className="rounded-lg shadow overflow-x-auto">
        <div className="flex flex-row gap-4 w-full">
          <div className="px-4 pb-4 rounded-sm border border-gray-200 flex-1">
            <div className="border-x border-gray-200 rounded-sm overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white border-b-2">
                    <th className="mytable">S. No.</th>
                    <th>
                      <div className="flex items-center">
                        Tracking ID
                        <FaSort
                          className="ml-1 hover:cursor-pointer"
                          onClick={() => {
                            sorting("tracking_id");
                          }}
                        />
                      </div>
                    </th>
                    <th className="px-12">
                      <div className="flex items-center">
                        Product Name
                        <FaSort
                          className="ml-1 hover:cursor-pointer"
                          onClick={() => {
                            sorting("product_name");
                          }}
                        />
                      </div>
                    </th>

                    <th className="pr-9">Shipping By </th>
                    <th className="pr-9">Shipping From</th>
                    <th className="pr-9">Delivering To</th>
                    <th className="pr-9">Currently</th>
                    {/* <th className="pr-9">
                      <div className="flex items-center">
                        Date
                        <FaSort
                          className="ml-1 hover:cursor-pointer"
                          onClick={() => {
                            sorting("date");
                          }}
                        />
                      </div>
                    </th> */}
                    {/* <th>
                      <div className="flex items-center">
                        Status
                        <FaSort
                          className="hover:cursor-pointer"
                          onClick={() => {
                            sorting("status");
                          }}
                        />
                      </div>
                    </th> */}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((d, index) => (
                    <tr
                      key={startIndex + d.id}
                      className={alternate(startIndex + index+1)}
                    >
                      <td className="mytable">{startIndex + index + 1}</td>

                      <td>{d.tracking_id}</td>

                      <td className="pl-12">{d.product_name}</td>
                      <td className="pl-5">{d.shipping_by}</td>
                      <td className="pl-6">{d.shipping_from}</td>
                      <td className="pl-5">{d.delivering_to}</td>
                      <td className="pl-5">{d.currently}</td>
                      {/* <td>{new Date(d.date).toLocaleDateString()}</td> */}
                      {/* <td>{getOrderStatus(d.status)}</td> */}
                      <td>
                        <div className="flex justify-center">
                          <HiPencil
                            className="fill-gray-800 mr-2 hover:cursor-pointer"
                            onClick={() => {
                              navigate("#");
                            }}
                          />
                          <HiTrash className="fill-red-500" />
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

export default Tracking;
