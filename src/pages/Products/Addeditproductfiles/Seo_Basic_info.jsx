import React, { useState, useEffect } from "react";

const Seo_Basic_info = () => {
  const [metaTitle, setMetaTitle] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  useEffect(() => {
    // Fetch SEO data from the backend API
    const fetchData = async () => {
      try {
        const response = await fetch("/api/seo"); // Replace "/api/seo" with the actual API endpoint
        const data = await response.json();
        setMetaTitle(data.metaTitle);
        setMetaKeywords(data.metaKeywords);
        setMetaDescription(data.metaDescription);
      } catch (error) {
        console.error("Error fetching SEO data:", error);
      }
    };

    fetchData();
  }, []);

  const handleMetaTitleChange = (e) => {
    setMetaTitle(e.target.value);
  };

  const handleMetaKeywordsChange = (e) => {
    setMetaKeywords(e.target.value);
  };

  const handleMetaDescriptionChange = (e) => {
    setMetaDescription(e.target.value);
  };

  return (
    <>
      <section>
        <h2 className="font-semibold sm:m-4">SEO</h2>

        <section className="m-1 p-1 sm:w-1/3 sm:h-[6rem] sm:m-4 flex flex-col justify-around">
          <p className="font-bold text-xs">Meta Title</p>
          <input
            type="text"
            name="metaNameOne"
            id="metaNameOne"
            placeholder="Enter Meta Title"
            className="bg-transparent border border-b-black text-sm p-1"
            value={metaTitle}
            onChange={handleMetaTitleChange}
          />
        </section>

        <section className="m-1 p-1 sm:w-1/3 sm:h-[6rem] sm:m-4 flex flex-col justify-around">
          <p className="font-bold text-xs">Meta Keywords</p>
          <input
            type="text"
            name="metaNameTwo"
            id="metaNameTwo"
            placeholder="Enter Keywords"
            className="bg-transparent border border-b-black text-sm p-1"
            value={metaKeywords}
            onChange={handleMetaKeywordsChange}
          />
        </section>

        <section className="m-1 sm:w-1/3  p-1 sm:m-4 flex flex-col justify-around">
          <p className="font-bold text-xs m-2">Meta Description</p>
          <textarea
            rows={3}
            cols={30}
            className="p-2 m-1 bg-transparent text-sm border border-slate-400 rounded-lg"
            placeholder="Enter Description"
            value={metaDescription}
            onChange={handleMetaDescriptionChange}
          ></textarea>
        </section>
      </section>
    </>
  );
};

export default Seo_Basic_info;
