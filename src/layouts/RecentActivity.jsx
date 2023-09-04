import React from "react";
import Rect1 from "../images/Rectangle 59.png";
import Rect2 from "../images/Rectangle 60.png";
import Rect3 from "../images/Group 38.png";

const Box = () => {
  const recent = [
    { time: "08:25", color: "#4F46E5", activity: "Product name is Delivered" },
    { time: "08:00", color: "#DC2626", activity: "Product name is Shipped" },
    { time: "03:44", color: "#9333EA", activity: "Product name is Shipped" },
    { time: "01:17", color: "#16A34A", activity: "Product name is Shipped" },
    { time: "00:05", color: "#EAB308", activity: "Product name is Shipped" },
    { time: "00:13", color: "#16A34A", activity: "Product name is Shipped" },
    { time: "01:11", color: "#9333EA", activity: "Product name is Shipped" },
    { time: "17:33", color: "#DC2626", activity: "Product name is Shipped" },
    { time: "02:45", color: "#16A34A", activity: "Product name is Shipped" },
    { time: "12:34", color: "#9333EA", activity: "Product name is Shipped" },
    { time: "11:54", color: "#DC2626", activity: "Product name is Shipped" },
    { time: "09:09", color: "#16A34A", activity: "Product name is Shipped" }
  ];

  return (
    <div className="p-4 mr-4 bg-white rounded-md shadow-lg text-sm">
      <strong>Recent Activity</strong>
      {recent.map((d, index) => (
        <div className="flex text-xs  items-center" key={index}>
          <strong className="w-12 pr-3 gap-14">{d.time}</strong>
          <div className="flex flex-col mt-3 justify-center items-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="gap-14 relative"
                cx="14"
                cy="14"
                r="11"
                stroke={d.color}
                strokeWidth="5"
              />
            </svg>
            {index < recent.length - 1 && (
              <div className={` hr-container ${index === 2 || index === 3 ? "w-7 mt-2 " : "w-4"}`}>
                <hr
                  className="justify-center items-center mt-3"
                  style={{
                    transform: "rotate(90deg)",
                    borderColor: "black",
                  }}
                />
              </div>
            )}
          </div>
          <div className="flex flex-col">
          <p className={`${index === 2 || index === 3 ? 'mt-8' : 'mt-0'} pl-3`}>{d.activity}</p>
          {(index === 2 || index === 3) && (
            <div className="flex pt-2 ">
              <img
                src={Rect1}
                alt="Image 1"
                className="w-8 h-8 rounded-full ml-2"
              />
              <img
                src={Rect2}
                alt="Image 2"
                className="w-8 h-8 rounded-full ml-2"
              />
              <img
                src={Rect3}
                alt="Image 3"
                className="w-8 h-8 rounded-full ml-2"
              />
            </div>
          )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Box;
