import React from 'react'
import styles from "../styles/pages/Body.module.css";
import LinkedinImage from "../image/LinkedinImage.svg";
import Whatsapp from "../image/Whatsapp.svg";
import Instagram from "../image/Instagram.svg";
import Github from "../image/Github.svg";
import GuilhermePerfil from "../image/GuilhermePerfil.jpeg"


export default function Body() {
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.imagemFoto}>
          <img src={GuilhermePerfil} alt="Guilherme Novo"/>
        </div>
        <div className={styles.containerPerfil}>
          <h1>Eu sou Guilherme Novo</h1>
          <h2>Desenvolvedor Front-End</h2>
          <h4>Apaixonado por tecnologia e programação</h4>
        </div>
        <div className={styles.containerPerfil2}>
          <div className={styles.ContainerImage}>
            <a href="https://www.linkedin.com/in/guilhermenovo/" target="_blank"><img src={LinkedinImage} alt="Linkedin"/></a>
            <a href="https://api.whatsapp.com/send?phone=5543984864198&text=Olá!" target="_blank" > <img src={Whatsapp} alt="Whatsapp"/></a>
            <a href="https://github.com/Guihnovo" target="_blank"><img src={Github} alt="Github"/></a>
            <a href="https://www.instagram.com/guihnovo/" target="_blank"><img src={Instagram} alt="Instagram"/></a>
          </div>
        </div>
      </section>
      
    </div>
  )
}
