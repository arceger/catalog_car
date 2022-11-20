import React from "react";
import MultiplePizzas from "../assets/carro10.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> NOSSA HISTORIA</h1>
        <p>
          Estamos no mercado a mais de 20 anos

          em varios estados brasileiros
        </p>
      </div>
    </div>
  );
}

export default About;
