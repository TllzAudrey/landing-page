import React from 'react';
import {useState} from 'react';
import './App.css';
import lecture from './lecture.jpeg';
import projet from './projet.jpg';
import Header from './files/header';
import Footer from './files/footer';
import Image_droite from './files/Image_droite';
import Image_gauche from './files/Image_gauche';
import ContainerText from './files/containerstext';
import ProgressionBars from './files/progressionBars';
import Apropos from './files/apropos'
import Timeline from './files/timeline'

function App() {
  const [champ_projet, setChampProjet] = useState([
    {titre:"ESTIAM, PROJET", soustitre:"Réalisation d’un site vitrine", description:"Développement d'un site web via le CMS wordpress, pour le Rotary Bourges Jacques Coeur dans le cadre d’un concours."}, 
    {titre:"ESTIAM, HACKATON", soustitre:"Réalisation d’un site d’évènementiel", description:"Mise en place d’un site web via le CMS wordpress, durant 5 jours"},
    {titre:"ALGOSUP, PROJET", soustitre:"Projet factory display", description:"Réalisation d’un site web d’affichages dynamiques de diverses contenus (textes, widgets et images)"},
  ]);
  const [aPropos, setAPropos] = useState([
    {titre:"", soustitre:"Mon profil", description:"Étudiante en 2ème année de Bachelor Conception de Données et Application à l'ESTIAM campus Bourges. Je suis à la recherche d'une entreprise pour m'accueillir pour un stage de fin d’année et une alternance en juillet 2025."}, 
  ]);
  const [expperience, setExperience] = useState([
    {date: "24 juin - 30 aout 2024", titre:"Paragon ID | Stage de validation de fin d’année", detail:"Gestion de projet et data analyse des bases données "},
    {date: "2019", titre:"Centre hospitalier George Sand | Stage de 2nde ", detail:"Ce stage m'a permis de m'assurer sur mon choix d'orientation. "},
  ]);
  const [formation, setFormation] = useState([
    {date: "2023 - 2025", titre:"ESTIAM | BAC + 2", detail:"Bachelor Conception de Données et Application"},
    {date: "2022 - 2023", titre:"Algosup | 1ère anné", detail:"Bachelor Architect logiciel"},
    {date: "2022", titre:"Lycée Saint Marie | Bac général", detail:"Spécialités mathématiques et Numérique et Sciences Informatiques"},
  ]);


  return (
  <>
    
    <Header />
    <ContainerText champ={aPropos} titre="A propos de moi" lien="a-propos"/>

    <ProgressionBars titre="Technologies que j'étudie" lien="skills"/>
    <ContainerText champ={champ_projet} titre="Mes projets récents" lien="projects"/>
    <Timeline champ={expperience} titre="Mon experiences" lien="mes-experiences" />
    

    <Image_droite titre="Mes passes temps" soustitre="Mes passions" 
    message="J’adore lire des romans, faire de la photographie et voyager.Lire me permet de m’évader dans des histoires captivantes et d’explorer d’autres mondes. C’est une façon de rêver et d’apprendre en même temps.Avec la photographie, j’aime capturer des instants uniques, comme un paysage ou un sourire. Ça me pousse à voir la beauté dans les détails et à garder des souvenirs précieux.Enfin, voyager me permet de découvrir de nouveaux endroits, de rencontrer des gens différents et de vivre des expériences inoubliables. Chaque voyage me fait grandir.Ces passions enrichissent ma vie et me rappellent la beauté du monde." 
    image={lecture} lien="passe-temp" />
    <Image_gauche titre="" soustitre="sous titre" message="message_header" image={projet} lien=""/>

    <Timeline champ={formation} titre="Mes formations" lien="mes-formations" />

    <Footer nom="Audrey" />    
  </>
   
  );
}

export default App;
