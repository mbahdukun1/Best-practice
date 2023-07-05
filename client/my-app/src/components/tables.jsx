import { PencilFill, Plus, PlusLg, PlusSquareFill, Trash } from "react-bootstrap-icons";
import { deleteProduct } from "../store/actions/actionProduct";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function ProductTable({ data, id }) {
  const dispatch = useDispatch();
  function deleteHandler() {
    dispatch(deleteProduct(data.id))
      .then(() => {
        toast.success("Product Deleted Successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // navigate("/tableProduct");
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
        <td>{data.description}</td>
        <td>
          <img className="img-fluid" src={data.imageUrl} />
        </td>
        <td>{data.stock}</td>
        <td>{data.Category.name}</td>
        <td>{data.User.email}</td>
        <td>
          <Link to={`/addProduct/${data.id}`}>
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
