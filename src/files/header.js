import {useState} from 'react';
import NavBar from './navbar';
import profil from '../assets/audrey.jpg';
import ImgMail from '../assets/mail.png';
import ImgMap from '../assets/map.png';
import ImgNumero from '../assets/numero.png';


export default function Header({description  }) {

  const [champ_navbar, setChampNavbar] = useState([
    { name: 'Compétences', lien: '#skills' },
    { name: 'Mes expériences', lien: '#mes-experiences' },
    { name: 'projets', lien: '#projects' },
    { name: "Mes passe temps", lien:"#passe-temp"},
    { name: 'Mes formations', lien: '#mes-formations' },    
    { name: 'Contact', lien: '#contact' },    
  ])
  const [mail, setMail] = useState('telliez.a18@gmail.com');
  const [map, setMap] = useState('Saint-Doulchard');
  const [num, setNum] = useState('06 28 18 79 92');
  
  return (
    <header>
      <NavBar champ_navbar = {champ_navbar} />
      <div class="header">
        <img src={profil} class="profil" alt="profil picture of a girl" />

        <div id="liens">
          <div class="lien">
            <img src={ImgMail} class="icon" alt="Icône d'une lettre représentant le mail de la personne" /><p>{mail}</p>
          </div>
          <div class="lien">
            <img src={ImgMap} class="icon" alt="Icône de position représentant la ville ou la personne habite" /><p>{map}</p>
          </div>
          <div class="lien">
            <img src={ImgNumero} class="icon" alt="Icône de téléphone représentant le numéro de télephone de la personne" /><p>{num}</p>
          </div>
        </div>
      </div>
    </header>
  );
   
}
