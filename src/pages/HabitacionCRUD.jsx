import React, { Component } from "react";

/*Styles*/
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/button";
import "../components/styles/habitacionCRUD.css";

export default class HabitacionCRUD extends Component {
  render() {
    return (
      <main>
        <div className="hero-image">
          <div className="hero-text">
            <h1>Ingreso</h1>
          </div>
        </div>

        <div className="container">


  <div class="form-group">
    <label for="nombre">Nombre:</label>
    <input type="texto" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  

        </div>
      </main>
    );
  }
}
