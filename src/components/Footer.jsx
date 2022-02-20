import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-section">
        <div className="container">
          <div className="row pb-50">
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h5>Dirección</h5>
                <div className="widget-text">
                  <i>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </i>
                  <p>
                    Tomás de Berlanga Sector Miraflores Alto <br />
                    Latacunga - Ecuador
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h5>Contacto</h5>
                <div className="widget-text">
                  <i>
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </i>
                  <p>(+593) 983181832</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h5>Email</h5>
                <div className="widget-text">
                  <i>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  <p>hostalhuasicama@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="developers-area">
          <div className="container">
            <div className="developers-text">
              <h6>ESPE - 2022 </h6>
              <div>
                <p>
                  Desarrollo Web Avanzado | 8934
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
