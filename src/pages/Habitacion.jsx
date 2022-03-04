import React, { Component } from "react";
import { Link } from "react-router-dom";

/*Variables Imagenes Room*/
import imageRoom from "../image/room/1.jpg";
import imageRoom1 from "../image/room/2.jpg";

/*Styles*/
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/button";
import "bootstrap/js/dist/modal";
import "../components/styles/room.css";

export default class Habitacion extends Component {
  render() {
    return (
      <main>
        {/* Header */}
        <div className="hero-image">
          <div className="hero-text">
            <h1>Habitaciones</h1>
          </div>
        </div>

        <div className="container">
          <div className="row gx-4 gx-lg-5 align-items-center my-5">
            <div className="col-lg-5">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                id="imgRoomHostal"
                src={imageRoom}
                alt=""
              />
            </div>
            <div className="col">
              <h4 id="titleRoomHostal">Habitación Vintage</h4>
              <p id="descriptionRoomHostalSmall">
                Espacio para 2 adultos <br /> Cama doble
              </p>
              <div id="groupIconsRoomHostal"></div>
              <h5 id="priceRoomHostal">20 US$</h5>
              <a
                className="btn btn-primary"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Más Información
              </a>
              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                  <div className="thumbnailsRoomHostal"></div>
                  <div>
                    <div className="row">
                      <div className="col">
                        <h6>Propiedad: </h6>
                        <p></p>
                      </div>
                      <div className="col">
                        <h6>Número de invitados: </h6>
                        <p>2</p>
                      </div>
                      <div className="col">
                        <h6>Camas: </h6>
                        <p>2 individuales</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <div className="row">
                      <div className="col">
                        <h6>Más información: </h6>
                      </div>
                      <div className="col">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus tristique convallis tellus, et egestas
                          magna condimentum sed. Sed auctor vehicula urna et
                          egestas. Vivamus non hendrerit ipsum. Nullam eu nunc
                          risus. Phasellus porta enim lectus, ut luctus justo
                          luctus nec. Vestibulum elementum tincidunt pretium.
                          Aenean consequat facilisis ornare.
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <div className="row">
                      <div className="col">
                        <h6>Servicios: </h6>
                      </div>
                      <div className="room-features">
                        <div className="room-info">
                          <i className="fa-solid fa-tv"></i>
                          <span>Smart TV</span>
                        </div>
                        <div className="room-info">
                          <i className="fa-solid fa-wifi"></i>
                          <span>Wifi</span>
                        </div>
                        <div className="room-info">
                          <i className="fa-regular fa-oven"></i>
                          <span>Cocina Privada</span>
                        </div>
                        <div className="room-info">
                          <i className="fa-solid fa-square-parking"></i>
                          <span>Parking</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
