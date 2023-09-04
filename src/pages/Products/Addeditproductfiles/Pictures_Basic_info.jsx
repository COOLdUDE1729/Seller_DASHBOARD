import React, { useState, useEffect } from "react";
import axios from "axios";

const Pictures_Basic_info = () => {
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetchImageData();
  }, []);

  const fetchImageData = async () => {
    try {
      const response = await axios.get("backend/image");
      const imageName = response.data.imageName;
      setImageFile(imageName);
    } catch (error) {
      console.error("Error fetching image data:", error);
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("backend/upload", formData);
      const imageName = response.data.imageName;
      setImageFile(imageName);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <section>
        <h2 className="font-semibold mt-2">Pictures</h2>

        <section className="flex sm:mt-4 items-center">
          <input type="file" onChange={handleFileUpload} />
          <label className="text-md my-3">Upload Image</label>
        </section>

        {imageFile && (
          <img src={`backend/images/${imageFile}`} alt="Uploaded Image" />
        )}
      </section>

      <section className="flex gap-1 items-center mt-2">
        <input type="radio" />
        <label className="text-sm">Digital Product</label>
      </section>
    </>
  );
};

export default Pictures_Basic_info;
