import { useDispatch, useSelector } from "react-redux";
import ProductTable from "../components/tables";
import "../css/table.css";
import { useEffect } from "react";
import { fetchProducts } from "../store/actions/actionProduct";
import { PlusCircle, PlusLg } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function TablePage() {
  let items = useSelector((state) => {
    return state.productsReducer.products;
  });
  let dispatch = useDispatch();
  // console.log(items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <section className="intro">
        <div className="bg-image h-100">
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body p-0">
                      <div className="table-responsive table-scroll" data-mdb-perfect-scrollbar="true">
                        <table className="table table-striped mb-0">
                          <thead>
                            <tr>
                              <th scope="col">NO</th>
                              <th scope="col">Product Name</th>
                              <th scope="col">Description</th>
                              <th scope="col" width="180px">
                                Image
                              </th>
                              <th scope="col">Stock</th>
                              <th scope="col">Categories</th>
                              <th scope="col">Author</th>
                              <th>
                                <Link to={"/addProduct"}>
                                  <button>
                                    <PlusCircle /> DATA
                                  </button>
                                </Link>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {items.map((item, index) => (
                              <ProductTable key={item.id} product={item} id={index + 1} />
                            ))}
                          </tbody>
                        </table>
                      </div>
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
