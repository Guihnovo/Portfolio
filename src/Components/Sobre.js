import React from 'react'
import FotoPerfil2 from "../image/FotoPerfil2.svg";
import styled from 'styled-components';
import guilherme from "../image/guilherme.pdf"
import styles from "../styles/pages/Sobre.module.css";

export default function Sobre() {
  return (
    <div>
      <section className={styles.grid} id="sobre">
        <div>
          <h1>Sobre mim</h1>
          <div className={styles.sobreTexto}>
              <p>Sou formado em Direito e futuro desenvolvedor. Após advogar por três anos, planejo cursar Análise de Desenvolvimento de Sistemas, sendo que possuo muita afinidade com a área de programação. Atualmente, finalizei um curso de Front-end na Labenu, um curso intenso de 520h em 6 meses, no qual estou desenvolvendo habilidades em HTML, CSS e JavaScript com framework React. Além da paixão por desenvolvimento web, tenho interesse em outras tecnologias. Em razão à pandemia e a saída do meu último emprego, tive a oportunidade de focar em meus estudos na área de desenvolvimento web. Desenvolvi alguns projetos com cursos online gratuitos, onde você pode conferir através do link https://github.com/Guihnovo, e outros projetos desenvolvidos junto à Labenu através do link https://github.com/Guihnovo. Sou dedicado para atingir meus objetivos e estou sempre disposto a aprender novos conteúdos, possuo bons resultados em trabalho em grupo e preservo sempre a boa convivência</p>
          </div>
          <div className={styles.tecnologias}>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <a href={guilherme} target="_blank"><button>CV em PDF</button></a>
          </div>
        </div>
        <div className={styles.IconePerfil}>
            <img src={FotoPerfil2} alt="Homem no computador"></img>
        </div>
      </section>
    </div>
  )
}
