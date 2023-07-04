import { useEffect } from "react";
import { fetchCategories } from "../store/actions/actionCategory";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AddProduct() {
  let data = useSelector((state) => {
    return state.categoriesReducer.categories;
  });
  let dispatch = useDispatch();
  //   console.log(data, "<<<< ini data page");

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#fff" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-9">
              <h1 className="text-black-center mb-4">FORM ADD PRODUCT</h1>

              <div className="card" style={{ borderRadius: "15px", backgroundColor: "whitesmoke" }}>
                <div className="card-body">
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Name Product</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input type="text" placeholder="name" className="form-control form-control-lg" />
                    </div>
                  </div>

                  <div className="mx-n3">
                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Description Product</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <textarea className="form-control" rows="3" placeholder="Description"></textarea>
                      </div>
                    </div>

                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Image Url</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input type="text" className="form-control form-control-lg" placeholder="Image Url" />
                      </div>
                    </div>

                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Stock</h6>
                      </div>
                      <div className="col-md-2 pe-5">
                        <input type="number" className="form-control form-control-lg" placeholder="0" />
                      </div>
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Category Product</h6>
                      </div>
                      <div className="col-md-2 pe-5">
                        <select type="select">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
