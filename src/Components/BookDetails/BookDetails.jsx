import React from "react";
import { useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const BookDetails = () => {
  const ReadBook = () => toast("Congratulations! For Read This Book.");
  const wishBook = () =>
    toast("Best Of Luck And Best Wishess For Reading This Book!");
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const filteredData = data.find((v) => v.bookId === id);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-10 w-full">
      <div>
        <figure className="bg-gray-300 rounded-2xl p-6">
          <img
            className="h-[564px] m-auto "
            src={filteredData.image}
            alt="Album"
          />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">{filteredData.bookName}</h2>
        <p>By : {filteredData.author}</p>
        <h4 className="border-b-1 border-t-1 border-dotted py-2">
          {filteredData.category}
        </h4>
        <p>
          <b>Review : </b>
          {filteredData.review}
        </p>
        <div className="card-actions border-b-1 border-dotted pb-2">
          <b>Tag </b>
          {filteredData.tags.map((tag, index) => (
            <div
              key={index}
              className="badge badge-outline"
              style={{ color: "#23BE0A" }}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex gap-24">
          <div>
            <p>Number Of Pages : </p>
            <p>Publisher : </p>
            <p>Year of Publishing : </p>
            <p>Rating : </p>
          </div>
          <div>
            <p>{filteredData.totalPages}</p>
            <p>{filteredData.publisher}</p>
            <p>{filteredData.yearOfPublishing}</p>
            <p>{filteredData.rating}</p>
          </div>
        </div>

        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions">
          <button className="btn" onClick={ReadBook}>
            Read
          </button>
          <ToastContainer />
          <button
            className="btn btn-ghost text-white rounded-md ml-2"
            style={{ backgroundColor: "#59C6D2" }}
            onClick={wishBook}
          >
            Wishlist
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
