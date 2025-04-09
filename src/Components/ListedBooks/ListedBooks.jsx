import React from "react";
import { Helmet } from "react-helmet-async";

const ListedBooks = () => {
  return (
    <div>
      <Helmet>
        <title>Book Store | Book List</title>
      </Helmet>
      <h1>Listed Book Page</h1>
    </div>
  );
};

export default ListedBooks;
