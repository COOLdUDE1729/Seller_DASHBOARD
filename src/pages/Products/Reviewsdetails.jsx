import React, { useState,useEffect } from "react";
import Topbar2 from "../../layouts/Topbar2";
import { HiTrash} from "react-icons/hi";
import { FaSort } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import mock from "../../dummy_data2.json";

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
const Reviewsdetails = () => {
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
      <Topbar2/>
      <div className="flex ml-5 mt-4">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.166504 13C0.166504 5.91251 5.91234 0.166672 12.9998 0.166672C20.0873 0.166672 25.8332 5.91251 25.8332 13C25.8332 20.0875 20.0873 25.8333 12.9998 25.8333C5.91234 25.8333 0.166504 20.0875 0.166504 13ZM8.33317 6.00001C8.02375 6.00001 7.72701 6.12292 7.50821 6.34171C7.28942 6.56051 7.1665 6.85725 7.1665 7.16667C7.1665 7.47609 7.28942 7.77284 7.50821 7.99163C7.72701 8.21042 8.02375 8.33334 8.33317 8.33334H11.8332C12.2298 8.33334 12.8505 8.46167 13.3382 8.81401C13.5598 8.97267 13.7722 9.18851 13.9273 9.50001H8.32967C8.02025 9.50001 7.72351 9.62292 7.50471 9.84171C7.28592 10.0605 7.163 10.3573 7.163 10.6667C7.163 10.9761 7.28592 11.2728 7.50471 11.4916C7.72351 11.7104 8.02025 11.8333 8.32967 11.8333H13.9273C13.7913 12.1072 13.5892 12.343 13.3393 12.5193C12.8953 12.8239 12.3715 12.991 11.8332 13H8.32967C8.08785 12.9999 7.85197 13.0749 7.65466 13.2147C7.45735 13.3545 7.30835 13.5522 7.22827 13.7804C7.1482 14.0085 7.14101 14.256 7.20769 14.4884C7.27438 14.7208 7.41164 14.9268 7.6005 15.0778L13.4373 19.7445C13.557 19.8403 13.6943 19.9115 13.8415 19.9542C13.9887 19.9969 14.1429 20.0101 14.2952 19.9932C14.4475 19.9763 14.595 19.9296 14.7293 19.8557C14.8635 19.7818 14.9819 19.6822 15.0777 19.5625C15.1734 19.4429 15.2447 19.3055 15.2874 19.1583C15.33 19.0111 15.3433 18.857 15.3264 18.7046C15.3095 18.5523 15.2628 18.4048 15.1889 18.2706C15.115 18.1363 15.0153 18.0179 14.8957 17.9222L11.6558 15.3333H11.8308C12.602 15.3333 13.7313 15.1117 14.7008 14.4128C15.5645 13.7945 16.1634 12.8735 16.3785 11.8333H17.6665C17.9759 11.8333 18.2727 11.7104 18.4915 11.4916C18.7103 11.2728 18.8332 10.9761 18.8332 10.6667C18.8332 10.3573 18.7103 10.0605 18.4915 9.84171C18.2727 9.62292 17.9759 9.50001 17.6665 9.50001H16.3785C16.2911 9.09299 16.147 8.70026 15.9503 8.33334H17.6665C17.9759 8.33334 18.2727 8.21042 18.4915 7.99163C18.7103 7.77284 18.8332 7.47609 18.8332 7.16667C18.8332 6.85725 18.7103 6.56051 18.4915 6.34171C18.2727 6.12292 17.9759 6.00001 17.6665 6.00001H8.33317Z" fill="black"/>
</svg>
        <div className="font-bold ml-2 items-center text-lg">Product Reviews</div>
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
                    <th className="p-2">
                      <div className="flex items-center justify-between">
                        Review title
                        <FaSort
                          className="ml-1 hover:cursor-pointer"
                          onClick={() => {
                            sorting("review_title");
                          }}
                        />
                      </div>
                    </th>
                    {/* <th className="pr-9 ">Product</th> */}
                    <th className="p-2">
                      <div className="flex items-center justify-between">
                        Review Body
                        <FaSort
                          className="ml-1 hover:cursor-pointer"
                          onClick={() => {
                            sorting("review_body");
                          }}
                        />
                      </div>
                    </th>

                    <th className="p-2">
                      <div className="flex items-center justify-between">
                        Reviewer Name
                        <FaSort
                          className="ml-1 hover:cursor-pointer"
                          onClick={() => {
                            sorting("reviewer_name");
                          }}
                        />
                      </div>
                    </th>

                    <th className="p-2">
                      <div className="flex items-center justify-between">
                        Reviewer E-Mail
                        <FaSort
                          className="ml-1 hover:cursor-pointer"
                          onClick={() => {
                            sorting("reviewer_mail");
                          }}
                        />
                      </div>
                    </th>

                    {/* <th className="pr-6">
                    <div className="flex items-center">
                        Product Name
                        <FaSort
                          className="ml-1 hover:cursor-pointer"
                          onClick={() => {
                            sorting("product_name");
                          }}
                        />
                      </div>
                    </th> */}
                    <th>Rating</th>
                    <th>Total Reviews</th>
                    {/* <th className="pr-9 ">Currently</th> */}
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
                    </th>  */}
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

                      <td className="p-2">{d.review_title}</td>
                      {/* <td className="pl-2 h-2 w-2">
                      <img
                        src={d.product}
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                      </td> */}

                      <td className="p-2">{d.review_body}</td>
                      {/* <td className="pl-8">{d.product_name}</td> */}
                      {/* <td className="pl-14">{d.review_body}</td> */}
                      <td className="p-2">{d.reviewer_name}</td>
                      <td className="p-2">{d.reviewer_email}</td>
                      <td className="p-2">{d.rating}</td>
                      <td className="p-2">{d.total_reviews}</td>
                      {/* <td>{new Date(d.date).toLocaleDateString()}</td> */}
                      {/* <td className="">{getOrderStatus(d.status)}</td> */}
                      <td className="p-2">
                        <div className="flex justify-center items-center gap-1">

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

export default Reviewsdetails;
