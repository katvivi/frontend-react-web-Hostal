import React, { Component } from "react";
import { Link } from "react-router-dom";

/*Variables Imagenes Carousel*/
import carousel1 from "../image/carousel/carousel-1.jpg";
import carousel2 from "../image/carousel/carousel-2.jpg";
import carousel3 from "../image/carousel/carousel-3.jpg";
/*Variables Imagenes follow*/
import follow1 from "../image/follow/follow-1.jpg";
import follow2 from "../image/follow/follow-2.jpg";
import follow3 from "../image/follow/follow-3.jpg";
import follow4 from "../image/follow/follow-4.jpg";

/*Styles*/
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/carousel";
import "./styles/home.css";

export default class HomeGrid extends Component {
  render() {
    //const { title, description1, description2 } = this.props;
    return (
      <main>
        <div
          id="carouselHostalImages"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="6000">
              <img src={carousel1} className="d-block w-100" />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={carousel2} className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={carousel3} className="d-block w-100" />
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselHostalImages"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselHostalImages"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h2>Somos cuidadores y guías para tu mejor estadía</h2>
            </div>
          </div>
          <div className="about-para">
            <div className="row">
              <div className="col-lg-6">
                <p>
                  Ecuador está generosamente compuesto de tierra volcánica, lo
                  que lo convierte en el sueño de todo escalador, disfruta la
                  aventura de tu vida con familia y amigos. Nos caracterizamos
                  por nuestro cálido servicio, donde a través de las
                  habitaciones, se podrá conocer a los personajes de la Fiesta
                  de la Mama Negra en 𝐇𝐎𝐒𝐓𝐀𝐋 𝐇𝐔𝐀𝐒𝐈𝐂𝐀𝐌𝐀.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  Áreas para tus reuniones familiares, sociales, empresariales,
                  institución públicas y privadas, contamos con un espacio donde
                  disfrutarás de un ambiente único en Latacunga.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="follow-facebook">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h3>
                  Síguenos en Facebook
                  <Link to="/">
                    {" "}
                    <b> Hostal-Huasicama</b>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </section>

        <div className="image-room">
          <div className="container-fluid">
            <div className="row">
              <img src={follow1} />
              <img src={follow2} />
              <img src={follow3} />
              <img src={follow4} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
