import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
        <nav
            className="navbar navbar-expand-sm navbar-light bg-info"
        >
            <div className="container">
                <NavLink className="navbar-brand" to="#">Navbar</NavLink>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/" aria-current="page"
                                >Home
                                <span className="visually-hidden">(current)</span></NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/addmovie">Add Movie</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink
                                className="nav-link dropdown-toggle"
                                to="#"
                                id="dropdownId"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                >Dropdown</NavLink>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownId"
                            >
                                <NavLink className="dropdown-item" to="#"
                                    >Action 1</NavLink>
                                <NavLink className="dropdown-item" to="#"
                                    >Action 2</NavLink >
                            </div>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <input
                            className="form-control me-sm-2"
                            type="text"
                            placeholder="Search"
                        />
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        
    </div>
  )
}

export default NavBar