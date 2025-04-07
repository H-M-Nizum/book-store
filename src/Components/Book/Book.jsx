import React from "react";
import { CiStar } from "react-icons/ci";
import { Link, useParams } from "react-router";

const Book = ({ book }) => {
  return (
    <Link to={`/book/${book.bookId}`}>
      <div className="card bg-base-100 w-96 shadow-lg ">
        <div className="p-6">
          <figure className="py-8 bg-gray-300 rounded-2xl">
            <img className="h-[166px] " src={book.image} alt={book.bookName} />
          </figure>
        </div>

        <div className="card-body">
          <div className="card-actions ">
            {book.tags.map((tag, index) => (
              <div
                key={index}
                className="badge badge-outline"
                style={{ color: "#23BE0A" }}
              >
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title">
            {book.bookName}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <p className="border-b-1 border-dotted pb-3">By : {book.author}</p>

          <div className="card-actions justify-between">
            <div>
              <p>{book.category}</p>
            </div>
            <div>
              <p className="flex items-center gap-1">
                {book.rating}
                <CiStar />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
