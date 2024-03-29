import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { register } from "../store/actions/actionUser";

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function clear() {
    setForm({
      email: "",
      password: "",
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await dispatch(register(form));
      clear();
      toast.success("Register Successfully ", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // console.log(name,value);
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">
                  <form onSubmit={handleSubmit} className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                    <p className="text-white-50 mb-5">Register Your Account Here!</p>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label">Email</label>
                      <input onChange={handleInputChange} type="email" name="email" id="email" value={form.email} className="form-control form-control-lg" />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label">Password</label>
                      <input onChange={handleInputChange} name="password" value={form.password} type="password" id="password" className="form-control form-control-lg" />
                    </div>
                    <br />

                    <button className="btn btn-outline-light btn-lg px-5" type="submit">
                      Submit
                    </button>
                  </form>
                  <div>
                    <p className="mb-0">
                      Already have an account? <Link to="/">Login</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      </section>
    </>
  );
}
