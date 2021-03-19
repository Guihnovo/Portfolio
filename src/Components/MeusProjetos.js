import React from 'react'
import styles from "../styles/pages/MeusProjetos.module.css"
import macbook2 from "../image/macbook2.png";
import ipad from "../image/ipad.jpg";
import imac from "../image/imac.png";

export default function MeusProjetos() {
  return (
    <div>
        <section className={styles.Container} id="projetos">
        <div>
          <h2> Meus projetos</h2>
        </div>
        <div className={styles.containerCursos}>
          <div>
            <img src={macbook2} alt="macbook"></img>
          </div>
          <div>
            <h1>MoveDev</h1>
            <span>Front End com Next.js</span>
            <p>Projeto realizado durante a Next Level Week da Rocketseat. Ojetivo da aplicação é ser um contador regressivo, no estilo pomodoro. Quando o tempo encerra uma atividade é sugerida para ser realizada. Projeto desenvolvido em Next.js e Typescript. Foi utlizado CSS-Module, useContext, useEffect, useState. Deploy na Vercel.</p>
            <a href="https://github.com/Guihnovo/Move" target="_blank"><button>Ver no GitHub</button></a>
            <a href="https://moveit-one-ebon.vercel.app/" target="_blank"><button>Link da Aplicação</button></a>
        </div>
        </div>
        <div className={styles.containerCursos2}>
          <div>
            <img src={ipad} alt="ipad"></img>
          </div>
          <div>
            <h1>Pokedéx</h1>
            <span>Front-end com React.js</span>
            <p>Projeto realizado em conjunto, na Labenu. A aplicação tem como objetivo adicionar e remover pokemons da pokedex, além de ver informações e características do pokemon selecionado. O projeto foi desenvolvido em React.js, com styled components, material-ui, Hooks, e axios para resquisições de api.</p>
            <a href="https://github.com/Guihnovo/Pokedex" target="_blank"><button>Ver no GitHub</button></a>
            <a href="http://onerous-map.surge.sh/" target="_blank"><button>Link da Aplicação</button></a>
          </div>
        </div>
        <div className={styles.containerCursos3}>
          <div>
            <img src={imac} alt="imac"></img>
          </div>
          <div>
            <h1>Rappi4A</h1>
            <span>Front-end com React.js</span>
            <p>Projeto realizado em conjunto, na labenu. Feito para versão mobile, os restaurantes são mostrados na tela, conforme número selecionado na tela de seleção. Dessa forma é chamado na api, para mostrar na tela. Ele também tem como característica adicionar ao carrinho, a qual aparece um modal com a quantidade, que será enviado para o carrinho. Tecnicamente, foi utilizado React.Js, com hooks, styled-components, material-ui, router e etc. O Projeto está em desenvolvimento. </p>
            <a href="https://github.com/Guihnovo/Rappi4A" target="_blank"><button>Ver no GitHub</button></a>

          </div>
        </div>
    </section>
    </div>
  );
}
