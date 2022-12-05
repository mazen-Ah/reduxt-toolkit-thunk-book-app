import React, { Fragment } from "react";

const BookInfo = ({ bookDetails }) => {
  console.log(bookDetails);
  return (
    <Fragment>
      <h2>Book Details</h2>
      <div className="alert alert-secondary" role="alert">
        There is no post selected yet. Please select!
      </div>
      {bookDetails && (
        <div>
          <p className="fw-bold">Title:{bookDetails.title}</p>
          <p className="fw-light">Description:{bookDetails.description}</p>
          <p className="fst-italic">Price:{bookDetails.price}</p>
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
