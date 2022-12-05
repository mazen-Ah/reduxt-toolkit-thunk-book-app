import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import "./book.css";
import { useSelector } from "react-redux";
import { useReadBookMutation } from "../../store/api/apiSlice";
import { useState } from "react";

const PostContainer = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [bookDetails, setBookDetails] = useState();
  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList isLoggedIn={isLoggedIn} setBookDetails={setBookDetails} />
        </div>
        <div className="col side-line">
          <BookInfo bookDetails={bookDetails} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
