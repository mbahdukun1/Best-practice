import "../css/sidebar.css"
import { Link, useNavigate } from "react-router-dom"
import {toast, ToastContainer} from "react-toastify"

export default function Sidebar () {
    const navigate = useNavigate()
    function handleLogout(e){
        e.preventDefault()
        localStorage.clear()
        toast.success('Success Login ', {
            position: toast.POSITION.TOP_CENTER
        })
        navigate("/")
    }
    return ( 
        <>
       <div className="area"></div><nav className="main-menu">
            <ul>
                <li>
                <Link to="/table"> 
                        <i className="fa fa-home fa-2x"></i>
                        <span className="nav-text">
                           Home Dashboard
                        </span>
                </Link>
                  
                </li>
                <li className="has-subnav">
                   <Link to="/table"> 
                        <i className="fa fa-globe fa-2x"></i>
                        <span className="nav-text">
                            Table Data 
                        </span>
                    </Link>
                    
                </li>
                <li className="has-subnav">
                <Link to="/home">
                       <i className="fa fa-comments fa-2x"></i>
                        <span className="nav-text">
                            Group Hub Forums
                        </span>
                </Link>
                    
                </li>
                
            </ul>

            <ul className="logout">
                <li>
                  <button onClick={handleLogout} >
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Logout
                        </span>
                    </button>
                </li>  
            </ul>
        </nav>
        </>
    )
}