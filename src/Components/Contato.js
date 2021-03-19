import React from 'react'
import LinkedinImage from "../image/LinkedinImage.svg";
import Whatsapp from "../image/Whatsapp.svg";
import Instagram from "../image/Instagram.svg";
import Github from "../image/Github.svg";
import styles from "../styles/pages/Contato.module.css"

export default function Contato() {
  return (
    <div>
      <section className={styles.Container} id="contato">
        <h1>Contrata-me!</h1>
        <p>Procuro oportunidade de trabalho onde eu possa aprender, me desenvolver e evoluir na minha carreira profissional.</p>
        <p>E-mail para contato: guilhermenovo22@gmail.com</p>
        <p>Celular: (43) 9 8486-4198</p>
        <div className={styles.Imagens}>
          <a href="https://www.linkedin.com/in/guilhermenovo" target="_blank"><img src={LinkedinImage} alt="Linkedin"/></a>
          <a href="https://api.whatsapp.com/send?phone=5543984864198&text=Olá!" target="_blank" > <img src={Whatsapp} alt="Whatsapp"/></a>
          <a href="https://github.com/Guihnovo" target="_blank"><img src={Github} alt="Github"/></a>
          <a href="https://www.instagram.com/guihnovo" target="_blank"><img src={Instagram} alt="Instagram"/></a>
        </div>
      </section>
      <footer className={styles.Footer}>
        <p>© 2021 Guilherme Novo</p>
      </footer>
    </div>
  )
}
