import { useEffect, useState } from "react";
import { fetchCategories } from "../store/actions/actionCategory";
import { useDispatch, useSelector } from "react-redux";
import { Form, Link, useNavigate, useParams } from "react-router-dom";
import { addProduct, editProduct, fetchProducts } from "../store/actions/actionProduct";
import { ToastContainer, toast } from "react-toastify";

export default function EditProduct() {
  const [editForm, setEditForm] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const data = useSelector((state) => {
    return state.categoriesReducer.categories;
  });
  const dataProduct = useSelector((state) => {
    return state.productsReducer.products;
  });
  console.log(dataProduct.stock, "<<< ini data name");

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);

  const changeHandler = (e) => {
    const { value, name } = e.target;
    const obj = { ...editForm };
    obj[name] = value;
    setEditForm(obj);
    console.log(editForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProduct(editForm))
      .then(() => {
        toast.success(`Product Edit Successfully`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(`/tableProduct`);
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
    <>
      <section className="vh-100" style={{ backgroundColor: "#fff" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-9">
              <h1 className="text-black-center mb-4">FORM EDIT PRODUCT</h1>

              <form onSubmit={handleSubmit} className="card" style={{ borderRadius: "15px", backgroundColor: "whitesmoke" }}>
                <div className="card-body">
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Name Product</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input onChange={changeHandler} defaultValue={dataProduct.name} type="text" placeholder="name" name="name" className="form-control form-control-lg" />
                    </div>
                  </div>

                  <div className="mx-n3">
                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Description Product</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <textarea onChange={changeHandler} name="description" id="description" className="form-control" rows="3" placeholder="Description"></textarea>
                      </div>
                    </div>

                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 htmlFor="imageUrl" className="mb-0">
                          Image Url
                        </h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input onChange={changeHandler} name="imageUrl" id="imageUrl" type="text" className="form-control form-control-lg" placeholder="Image Url" />
                      </div>
                    </div>

                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Stock</h6>
                      </div>
                      <div className="col-md-2 pe-5">
                        <input type="number" onChange={changeHandler} name="stock" id="stock" className="form-control form-control-lg" placeholder="0" />
                      </div>
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Category Product</h6>
                      </div>
                      <div className="col-md-2 pe-5">
                        <select name="categoryId" onChange={changeHandler}>
                          <option hidden selected>
                            --Select One--
                          </option>
                          {data.map((item) => (
                            <option value={item.id}>{item.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className=" px-5 py-4">
                      <Link to="/tableProduct">
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
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </>
  );
}
