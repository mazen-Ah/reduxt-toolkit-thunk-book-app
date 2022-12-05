import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetBooksQuery } from "../store/api/apiSlice";
import { logInOut } from "../store/authSlice";
const Header = () => {
  const { error, isError } = useGetBooksQuery();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      {isError && (
        <div className="alert alert-danger mb-0" role="alert">
          {error.error}
        </div>
      )}
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My Books</span>

        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={() => dispatch(logInOut())}
        >
          {isLoggedIn ? "log Out" : "Log In"}
        </button>
      </nav>
    </>
  );
};

export default Header;
