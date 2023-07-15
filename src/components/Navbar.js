import React from 'react'
import { Link } from 'react-router-dom'
// import Form from 'react-bootstrap/Form';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Text Utils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/about">About</Link>
        </li>
      </ul>
      {/* <Form className='switch mx-2 my-2' style={props.mode==='light'?{color : "black"}:{color : "white"}}>
        <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label={`Enable Dark Mode`}
        onClick = {props.toggleMode}
        />
        </Form> */}
        <button  onClick = {props.toggleMode} className="btn btn-primary">Dark</button>

    </div>
  </div>
</nav>
    </div>
  )
}
