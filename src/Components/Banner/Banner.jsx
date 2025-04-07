import React from "react";
import BannerImage from "../../assets/books.jpg"; // Adjust the path as necessary

const Banner = () => {
  return (
    <div className="hero bg-base-200 p-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={BannerImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-[56px] font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button
            className="btn btn-ghost text-white rounded-md mt-5"
            style={{ backgroundColor: "#23BE0A" }}
          >
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
