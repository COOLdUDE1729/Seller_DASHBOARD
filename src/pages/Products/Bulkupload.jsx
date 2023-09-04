import React,{useState,useEffect} from "react";
import { AiFillFileExcel } from "react-icons/ai";
import { BsCloudUploadFill, BsUpload } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'

function BulkUpload() {
  const navigate = useNavigate();

  // 
  const downloadFile = async () => {
    try {
      const response = await axios({
        url: 'http://localhost:3000/download',
        method: 'GET',
        responseType: 'blob',
      });
  
      const url = window.URL.createObjectURL(new Blob([response.data]));
  
      // Create a download link and trigger the download
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.setAttribute('download', 'format_bulkupload.xlsx');
      downloadLink.click();
  
      // Clean up the blob URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // 

  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('excelFile', selectedFile);

      fetch('/upload-excel', {
        method: 'POST',
        body: formData
      })
        .then(response => {
          if (response.ok) {
            console.log('File uploaded successfully');
          } else {
            console.error('Upload error:', response.status);
          }
        })
        .catch(error => {
          console.error('Network error:', error);
        });
    }
  }, [selectedFile]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };


  return (
    <div>
      <div className="flex  ml-[20px] mt-[30px] items-center">
        <BsCloudUploadFill size={25} />
        <div>
          <h3 className="font-semibold text-[20px] mx-[10px]">Bulk Upload</h3>
        </div>
      </div>
      <div className="border-t border-gray-300 my-4 mx-4"></div>

      <div className="flex flex-col ml-[20px] mt-[50px]">
        <div className="flex">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
            1
          </div>
          <p className="mt-[12px] ml-[20px]">
            You can Import multiple Products into your System from the Excel
            file.
          </p>
        </div>

        <div className="flex mt-[20px]">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
            2
          </div>
          <p className="mt-[12px] ml-[20px]">
            Download the excel format file from this link:
          </p>
          <button
            className="bg-customPurple text-white px-4 rounded-lg flex items-center space-x-2 ml-[5px]"
            id="downloadButton"
          >
            <AiFillFileExcel size={25} />
            <h3 className="ml-[5px]">Excel Format</h3>
          </button>
        </div>
        <div className="flex mt-[20px]">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mt-[15px]">
            3
          </div>
          <p className="mt-[12px] ml-[20px] w-[900px]">
            Once you donwload above excel file format then fill data about your
            products in the excel file and upload in below option. Keep in mind
            that you have not to remove the top header row of the excel file
            because it is format for uploading the data. If you change any
            header column text then you will not be able to upload the data.
          </p>
        </div>
        {/* <div
          className="mt-[40px] "
          onClick={() => {
            navigate("../products");
          }}
        > */}
          <div
            className="mt-[40px] "
            onClick={() => {
              navigate("../products");
            }}
          >
            <input type="file" />
            <button className="bg-customPurple text-white py-2 px-4 rounded-lg flex items-center space-x-2 ml-[5px]">
              <AiFillFileExcel size={25} />
              <h3 className="ml-[5px]">Upload Excel File</h3>
            </button>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default BulkUpload;
