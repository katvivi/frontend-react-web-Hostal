import React, { Component } from "react";

/*Variables Imagenes Card*/
import CardBlog_Cotopaxi from "../image/CardBlog/CardBlog_Cotopaxi.jpg";
import CardBlog_Illiniza from "../image/CardBlog//CardBlog_Illiniza.jpg";
import CardBlog_Quilotoa from "../image/CardBlog/CardBlog_Quilotoa.jpg";
import CardBlog_Mama_Negra from "../image/CardBlog/CardBlog_Mama_Negra.jpg";


/*Styles*/
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/blog.css";

export default class Blog extends Component {
  render() {
    return (
      <main>
        {/* Header */}
        <div className="hero-image">
          <div className="hero-text">
            <h1>Blog</h1>
          </div>
        </div>
        <br />
        <br />

        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={CardBlog_Cotopaxi}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Parque Nacional Cotopaxi</h5>
                  <p className="card-text">
                    El Parque Nacional Cotopaxi es un área protegida de Ecuador
                    situada en el Cantón Latacunga en la Provincia de Cotopaxi
                    en Ecuador. Dentro del parque y en territorio de la
                    provincia de Cotopaxi se encuentra el nevado Volcán
                    Cotopaxi.
                  </p>
                  <br />
                  <p className="card-text">
                    <a href="#" class="btn btn-blog">
                      Seguir Leyendo
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={CardBlog_Illiniza}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Montañismo Illiniza Sur</h5>
                  <p className="card-text">
                    Los Illinizas son un conjunto montañoso que se ubica en los
                    límites de las provincias de Cotopaxi y Pichincha,
                    compartiendo su territorio con Latacunga y Sigchos (en sus
                    faldas occidentales), presenta dos elevaciones rocosas de
                    gran tamaño.
                  </p>{" "}
                  <br />
                  <p className="card-text">
                    <a href="#" class="btn btn-blog">
                      Seguir Leyendo
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src={CardBlog_Quilotoa}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Quilotoa</h5>
                  <p className="card-text">
                    Se encuentra a 15 kilómetros de la ciudad de Zumbahua y se
                    caracteriza por los vientos helados que recorren el lugar.
                    El cráter del volcán inactivo Quilotoa forma un tazón que
                    recoge las aguas azules de la laguna, mismas que deben su
                    color a la acumulación de azufre.
                  </p>
                  <p className="card-text">
                    <a href="#" class="btn btn-blog">
                      Seguir Leyendo
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-4">
              <div class="side-bar">
                <div class="categories-item">
                  <h4>Categorías populares</h4>
                  <div class="categories-list">
                    <ul>
                      <li>
                      Vacaciones  <span>2</span>
                      </li>
                      <li>
                      Restaurantes  <span>5</span>
                      </li>
                      <li>
                      Eventos  <span>8</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
            
          </div>

          <div class="blog-post">
            <div className="blog-pagination">
              <a className="active" href="#">
                1
              </a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
