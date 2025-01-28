import {useState} from 'react';
import NavBar from './navbar';
import profil from '../header/audrey.jpg';
import ImgMail from '../header/mail.png';
import ImgMap from '../header/map.png';
import ImgNumero from '../header/numero.png';


export default function Header({description  }) {
  /*const [champ_navbar, setChampNavbar] = useState([
    { name: 'A propos', lien: '#a-propos' },
    { name: 'Compétences', lien: '#skills' },
    { name: 'projets', lien: '#projects' },
    { name: 'Mes expériences', lien: '#mes-experiences' },
    { name: "Mes passe temps", lien:"#passe-temp"},
    { name: 'Mes formations', lien: '#mes-formations' },    
    { name: 'Contact', lien: '#contact' },    
  ]) */
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
        <img src={profil} class="profil" alt="photo-profil" />

        <div id="liens">
          <div class="lien">
            <img src={ImgMail} class="icon" alt="icon" /><p>{mail}</p>
          </div>
          <div class="lien">
            <img src={ImgMap} class="icon" alt="icon" /><p>{map}</p>
          </div>
          <div class="lien">
            <img src={ImgNumero} class="icon" alt="icon" /><p>{num}</p>
          </div>
        </div>
      </div>
    </header>
  );
   
}
