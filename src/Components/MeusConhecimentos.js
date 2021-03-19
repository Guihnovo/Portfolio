import React from 'react'
import styles from "../styles/pages/MeusConhecimentos.module.css"

export default function MeusConhecimentos() {
  return (
    
      <section className={styles.Container}>
        <div>
          <h2>Meus conhecimentos</h2>
        </div>
        <div className={styles.FrontText}>
          <h1>Front-end</h1>
          <p>Desenvolvimento de aplicações web utilizando HTML, CSS e Javascript</p>
          <p>Estudando Next.Js, GraphQL, Strapi entre outros.</p>
          <p>Criação de sites responsivos</p>
        </div>
      </section>
    
  );
}


