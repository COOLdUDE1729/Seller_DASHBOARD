import React, { useState, useEffect } from 'react';
import { HiTrash, HiPencil } from 'react-icons/hi';
import { FaSort } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Function to style the order status
function getOrderStatus(status) {
  switch (status) {
    case 'Active':
      return (
        <span className="flex justify-center items-center capitalize py-1 px-2 rounded-full text-xs font-bold text-green-500 bg-green-100 border border-green-500">
          {status}
        </span>
      );
    case 'Deactivated':
      return (
        <span className="flex justify-center items-center capitalize py-1 px-2 rounded-full text-xs font-bold text-red-500 bg-red-100 border border-red-500">
          {status}
        </span>
      );
    default:
      return (
        <span className="flex justify-center items-center capitalize py-1 px-2 rounded-md text-xs font-bold text-gray-600 bg-gray-100">
          {status.replaceAll('_', ' ').toLowerCase()}
        </span>
      );
  }
}

// Function for alternate gray and white
function alternate(index) {
  if (index % 2 !== 0) return 'bg-white';
}

const Commisiontable = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [order, setOrder] = useState('ASC');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/commission'); // Replace with the actual API endpoint to fetch commission data
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Sort Column
  const sorting = (col) => {
    if (order === 'ASC') {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder('DSC');
    }
    if (order === 'DSC') {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder('ASC');
    }
  };

  // Pagination
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* Table */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <div className="px-4 pb-4 rounded-sm border border-gray-200 flex-1">
            <div className="border-x border-gray-200 rounded-sm overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="font-bold bg-white border-b-2">
                    <th>S. No.</th>
                    <th className="mytable">
                      <div className="flex items-center">
                        Product ID
                        <FaSort
                          className="ml-1 hover:cursor-pointer"
                          onClick={() => {
                            sorting('product_id');
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
                            sorting('product_name');
                          }}
                        />
                      </div>
                    </th>
                    <th>Commission</th>
                    <th>Dated From</th>
                    <th>Dated To</th>
                    <th className="w-24">
                      <div className="flex items-center justify-between">
                        Status
                        <FaSort
                          className="hover:cursor-pointer"
                          onClick={() => {
                            sorting('status');
                          }}
                        />
                      </div>
                    </th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((d, index) => (
                    <tr key={startIndex + d.id} className={alternate(startIndex + index + 1)}>
                      <td className="mytable">{startIndex + index + 1}</td>
                      <td className="pl-2">{d.product_id}</td>
                      <td>{d.product_name}</td>
                      <td className="pl-5">{d.commission}</td>
                      <td className="pl-5">{new Date(d.dated_from).toLocaleDateString()}</td>
                      <td className="pl-12">{new Date(d.dated_to).toLocaleDateString()}</td>
                      <td>{getOrderStatus(d.status)}</td>
                      <td className="pl-5">
                        <div className="flex">
                          <HiPencil className="fill-gray-800 mr-2 hover:cursor-pointer" />
                          <HiTrash className="fill-red-500 hover:cursor-pointer" />
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
                handlePageChange(currentPage === 1 ? totalPages : currentPage - 1)
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
                handlePageChange(currentPage === totalPages ? 1 : currentPage + 1)
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

export default Commisiontable;
