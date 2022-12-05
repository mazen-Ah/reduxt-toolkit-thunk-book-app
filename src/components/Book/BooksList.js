import React from "react";
import { useDispatch } from "react-redux";
import {
  useGetBooksQuery,
  useDeleteBookMutation,
} from "../../store/api/apiSlice";
const BooksList = ({ isLoggedIn, setBookDetails }) => {
  const { data: books, isLoading } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();
  const BookList = books
    ? books?.map((item) => {
        return (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={item.id}
          >
            <div>{item.title}</div>
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setBookDetails(item)}
              >
                Read
              </button>
              <button
                type="button"
                className="btn btn-danger"
                disabled={!isLoggedIn}
                onClick={() => deleteBook(item.id)}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })
    : "There is no books available!";
  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? "Loading..." : <ul className="list-group">{BookList}</ul>}
    </div>
  );
};

export default BooksList;
