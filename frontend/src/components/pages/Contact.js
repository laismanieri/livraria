import React from "react";
import styles from "./Contact.module.css";
import Footer from "../layout/Footer";
import Usuario from "../layout/Usuario";
import { Link } from "react-router-dom";
import Container from "../layout/Container";

function Contact() {
  return (
    <>
      <nav className={styles.navbar}>
        <Container>
          <Link to="/">
            <img src="./img/logo.png" alt="logo" />
          </Link>
          <Link to="/">
            <h1 className={styles.listH1}>Home</h1>
          </Link>
          <ul className={styles.list}>
            <Usuario />
          </ul>
        </Container>
      </nav>

      <form className={styles.formContact}>
        <label className={styles.formContactLabel} htmlFor="name">
          Nome:
        </label>
        <input
          className={styles.formContactInput}
          type="text"
          name="nome"
          placeholder=" Nome"
          maxlength="100"
          required
        />

        <label className={styles.formContactLabel} htmlFor="email">
          Email:
        </label>
        <input
          className={styles.formContactInput}
          type="email"
          name="E-mail"
          placeholder=" E-mail"
          maxlength="100"
          required
        />

        <label className={styles.formContactLabel} htmlFor="telefone">
          Telefone:
        </label>
        <input
          className={styles.formContactInput}
          type="tel"
          name="Telefone"
          placeholder=" Telefone"
          maxlength="30"
        />

        <label className={styles.formContactLabel} htmlFor="message">
          Digite a sua sugestão:
        </label>
        <textarea
          className={styles.formContactTextArea}
          placeholder=" Digite sua mensagem aqui..."
          name="mensagem"
          cols="30"
          rows="7"
          required
        />

        <button className={styles.formContactButton} type="submit">
          Enviar
        </button>
      </form>
      <Footer />
    </>
  );
}

export default Contact;
