import React from "react";
import PizzaLeft from "../assets/carro8.jpeg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Envie Sua Proposta</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nome Completo</label>
          <input name="name" placeholder="Seu nome completo..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Seu email..." type="email" />
          <label htmlFor="message">Mensagem</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
