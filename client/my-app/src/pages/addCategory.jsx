import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addCategory, fetchCategories } from "../store/actions/actionCategory";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../css/table.css";

export default function AddCategory() {
  const [addForm, setAddForm] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dataCategory = useSelector((state) => {
    return state.categoriesReducer.categories;
  });

  // console.log(dataCategory, "<<<< ini data page");

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const changeHandler = (e) => {
    const { value, name } = e.target;
    const obj = { ...addForm };
    obj[name] = value;
    setAddForm(obj);
    console.log(addForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCategory(addForm))
      .then(() => {
        toast.success(`Success Added Category`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/tableCategory");
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <section className="vh-100" style={{ backgroundColor: "#fff" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-9">
            <h1 className="text-black-center mb-4">FORM ADD CATEGORY</h1>

            <form className="card" onSubmit={handleSubmit} style={{ borderRadius: "15px", backgroundColor: "whitesmoke" }}>
              <div className="card-body">
                <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Name Category</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input type="text" onChange={changeHandler} name="name" placeholder="name" className="form-control form-control-lg" />
                  </div>
                </div>

                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 htmlFor="imageUrl" className="mb-0">
                      Main Image
                    </h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input name="mainImg" onChange={changeHandler} id="mainImg" type="text" className="form-control form-control-lg" placeholder="Image Url" />
                  </div>
                </div>

                <div className="mx-n3">
                  <div className=" px-5 py-4">
                    <Link to="/tableCategory">
                      <button type="submit" className="btn btn-danger btn-md">
                        Cancel
                      </button>
                    </Link>
                    <button style={{ marginLeft: "10px" }} type="submit" className="btn btn-primary btn-md">
                      Submit Data
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
