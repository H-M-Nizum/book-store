import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/booksData.json")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);
  console.log(books);
  return (
    <div className="mt-10 w-full">
      <h1 className="text-[40px] font-bold text-center ">Books</h1>

      <div className="flex justify-between mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {books.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
