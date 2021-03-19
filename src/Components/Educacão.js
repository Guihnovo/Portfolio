import React from 'react'
import styles from "../styles/pages/Educação.module.css"

export default function Educacão() {
  return (
    
      <section className={styles.Container}>
          <div className={styles.ContainerH2}>
            <h2>Educação</h2>
          </div>
          <div className={styles.containerCursos}>
            <div className={styles.cursosTexto}>
              <h2>Curso Front-end na Labenu</h2>
              <p>6 meses - 2020/2021 - 600h</p>
              <p>Curso voltado para programação em HTML, CSS, JavaScript e React(hooks, router, axios). Também tive conhecimento em git, github, postman(api).</p>
            </div>
            <div className={styles.cursosTexto}>
              <h2>React Avançado - Next.Js</h2>
              <p>62 horas - Cursando/2021</p>
              <p>Udemy com next.js, typescript, GraphQL e mais.</p>
            </div>
            <div className={styles.cursosTexto}>
              <h2>Alura</h2>
              <p>HTML, CSS, Lógica de programação(JavaScript). Todos cursos de entrada.</p>
            </div>
          </div>
      </section>
    
  )
}
