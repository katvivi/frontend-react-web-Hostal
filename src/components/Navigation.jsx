import React, { Component } from "react";
import imgLogo from "../image/logo.png";
import styles from './styles/Navigation.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg  ">
        <div className="container">
          <div>
            <Link to="/">
              <img  width={250} height={150} src={imgLogo} />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={styles.mainMenu}>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/habitacion">
                  Habitaciones
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reserva">
                  Reserva ahora
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/habitacionCRUD">
                  Ingreso|Habitacion
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
