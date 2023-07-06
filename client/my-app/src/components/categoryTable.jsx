import { Link, useNavigate } from "react-router-dom";
import { PencilFill, Plus, PlusLg, PlusSquareFill, Trash } from "react-bootstrap-icons";
import React, { useEffect } from "react";
import { deleteCategory } from "../store/actions/actionCategory";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

export default function CategoryTable({ data, id }) {
  const dispatch = useDispatch();
  function deleteHandler() {
    dispatch(deleteCategory(data.id))
      .then(() => {
        toast.success("Category Deleted Successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) =>
        toast.error(error.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      );
  }

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{data.name}</td>
        <td>
          <img className="img-fluid" src={data.mainImg} />
        </td>
        <td>
          <Link to={`/addCategory/${data.id}`}>
            <button>
              <PencilFill />
            </button>
          </Link>
          <button onClick={() => deleteHandler(data.id)}>
            <Trash />
          </button>
        </td>
      </tr>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </>
  );
}
