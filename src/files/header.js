import {useState} from 'react';
import NavBar from './navbar';
import profil from '../audrey.jpg';
import ImgMail from '../mail.png';
import ImgMap from '../map.png';
import ImgNumero from '../numero.png';


export default function Header({  }) {
  const [champ_navbar, setChampNavbar] = useState([
    { name: 'Compétences', lien: '#skills' },
    { name: 'projets', lien: '#projects' },
    { name: 'Mes premiers pas', lien: '#firstprojects' },
    { name: 'test', lien: '#test' },
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
