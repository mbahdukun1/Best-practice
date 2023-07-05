import { useDispatch, useSelector } from "react-redux";
import ProductTable from "../components/tables";
import "../css/table.css";
import { useEffect } from "react";
import { fetchCategories } from "../store/actions/actionCategory";
import CategoryTable from "../components/categoryTable";
import { PlusCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function TableCategory() {
  let categories = useSelector((state) => {
    return state.categoriesReducer.categories;
  });

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
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
                              <th scope="col">Category Name</th>
                              <th>
                                <Link to={"/addCategory"}>
                                  <button>
                                    <PlusCircle /> Category
                                  </button>
                                </Link>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {categories.map((category, index) => (
                              <CategoryTable key={category.id} data={category} id={index + 1} />
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
