// import "../css/sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import * as actions from "../store/actions/actionProduct";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState({});

  function handleLogout(e) {
    e.preventDefault();
    localStorage.clear();
    toast.success("Success Login ", {
      position: toast.POSITION.TOP_CENTER,
    });
    navigate("/");
  }

  const changeHandler = (e) => {
    const { value, name } = e.target;
    const obj = { ...query };
    obj[name] = value;
    setQuery(obj);
    console.log(query);
  };
  function submitHandler(e) {
    e.preventDefault();
    dispatch(actions.fetchProducts(query));
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="/home">DASHBOARD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Table" id="basic-nav-dropdown">
              <NavDropdown.Item href="/tableProduct">Product</NavDropdown.Item>
              <NavDropdown.Item href="/tableCategory">Category</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Chart" id="basic-nav-dropdown">
              <NavDropdown.Item href="/barChart">Bar Chart</NavDropdown.Item>
              <NavDropdown.Item href="/pieChart">Pie Chart</NavDropdown.Item>
              <NavDropdown.Item href="/lineChart">Line Chart</NavDropdown.Item>
            </NavDropdown>
            <Button onClick={handleLogout} variant="danger">
              Logout
            </Button>
          </Nav>
          <Form className="d-flex" onSubmit={submitHandler}>
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={changeHandler} />
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
