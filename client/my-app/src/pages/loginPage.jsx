import "../css/login.css"
import {Link, useNavigate} from "react-router-dom"
import React, {useState} from "react"
import { login } from "../store/actions/actionUser"
import {useDispatch} from "react-redux"
import {toast, ToastContainer} from "react-toastify"


export default function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  function clear() {
    setForm({
      email:"",
      password:""
    })
  }

  async function handleLogin(e) {
    e.preventDefault()
    try {
      await dispatch(login(form))
      clear()
      toast.success('Success Login ', {
        position: toast.POSITION.TOP_CENTER
    })
    navigate("/home")
    } catch (error) {
      toast.error('Error !', {
        position: toast.POSITION.TOP_CENTER
    });
    console.log(error)
    }
  }

  const handleInputChange = (event) => {
    const {name,value} = event.target
    // console.log(name,value);
    setForm({...form, [name]: value})
  }
  

  return (
    <>
    <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" >
          <div className="card-body p-5 text-center">

            <form onSubmit={handleLogin} className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
                <input onChange={handleInputChange} type="email" name="email" id="email" value={form.email} className="form-control form-control-lg" />
                <label className="form-label" >Email</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input onChange={handleInputChange} name="password" value={form.password} type="password" id="password" className="form-control form-control-lg" />
                <label className="form-label" >Password</label>
              </div>

              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

              <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

            </form>
            <div>
              <p className="mb-0">Don't have an account? <Link to="/register">Register Now</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  </section>
    </>
  )
}