import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomeGrid from "./components/HomeGrid";
import Habitacion from "./pages/Habitacion";
import Blog from "./pages/Blog";
import Reserva from "./pages/Reserva";
import HabitacionCRUD from "./pages/HabitacionCRUD";

export function App() {
  return (
    <Router>
      <header>
        <Navigation />
      </header>

      <main>
        <Routes>
          {/* <Route path="/" exact component={HomeGrid} /> */}
          <Route path="/" element={<HomeGrid />} />
          {/* <Route exact path="/habitacion" component={Habitacion} /> */}
          <Route path="/habitacion" element={<Habitacion />} />
          {/* <Route exact path="/blog" component={Blog} />
          <Route exact path="/reserva" component={reserva} /> */}
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/reserva" element={<Reserva />} />
          <Route exact path="/habitacionCRUD" element={<HabitacionCRUD />} />

        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </Router>
  );
}
