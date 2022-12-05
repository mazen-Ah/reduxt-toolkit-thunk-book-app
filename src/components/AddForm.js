/* eslint-disable no-undef */
import React from "react";
import { useAddBookMutation } from "../store/api/apiSlice";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useEffect } from "react";

const Addform = () => {
  // refForm = useRef(null);
  const [addBook, { isSuccess }] = useAddBookMutation();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { name } = useSelector((state) => state.auth);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(e.currentTarget)]);
    formData.name = name;
    addBook(formData);
    // e.target.reset()
  };
  useEffect(() => {
    document.querySelector("form").reset();
  }, [isSuccess]);
  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        <h2>Insert Book</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              name="title"
              type="text"
              className="form-control"
              id="title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              name="price"
              type="number"
              className="form-control"
              id="price"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              name="description"
              className="form-control"
              id="Description"
              rows="3"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isLoggedIn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
