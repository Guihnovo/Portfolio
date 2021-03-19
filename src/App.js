import React from 'react';
import Body from './Components/Body';
import Contato from './Components/Contato';
import Educacão from './Components/Educacão';
import  { Header }  from "./Components/Header"
import MeusConhecimentos from './Components/MeusConhecimentos';
import MeusProjetos from './Components/MeusProjetos';
import Sobre from './Components/Sobre';


export default function Home() {
    return (
      <div>
        <Header/>
        <Body/>
        <Sobre/>
        <MeusConhecimentos/>
        <Educacão/>
        <MeusProjetos/>
        <Contato/>
      </div>
    );
  }
  

