import {useState} from 'react';
import NavBar from './navbar';
import profil from '../audrey.jpg';
import ImgMail from '../mail.png';
import ImgMap from '../map.png';
import ImgNumero from '../numero.png';

export default function Header({titre_header,  message_header, mail, map, num  }) {
  const [champ_navbar, setChampNavbar] = useState([
    { name: 'email', lien: 'apropos' },
    { name: 'test', lien: 'text' },
    { name: 'youpi', lien: 'youpi' },
  ])

  
  return (
    <header>
        <NavBar champ_navbar = {champ_navbar} />
        <div class="header">
          <div class="header-left">
            <img src={profil} className="profil" alt="photo-profil" />
          </div>
          <div class="header-right">
            <h1 className="header-title"> {titre_header} </h1>
            <p className="header-message"> {message_header} </p>
            <div class="liens">
              <img src={ImgMail} className="icon" alt="icon" />
              <p>{mail}</p>
            </div>
            <div class="liens">
              <img src={ImgMap} className="icon" alt="icon" />
              <p>{map}</p>
            </div>
            <div class="liens">
              <img src={ImgNumero} className="icon" alt="icon" />
              <p>{num}</p>
            </div>
          </div>
      </div>
    </header>
  );
   
}
