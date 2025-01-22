import {useState} from 'react';
import NavBar from './navbar';

export default function Header() {
  const [champ_navbar, setChampNavbar] = useState([
    { name: 'email', lien: 'apropos' },
    { name: 'test', lien: 'text' },
    { name: 'youpi', lien: 'youpi' },
  ])

  
  return (
    <header>
        <NavBar champ_navbar = {champ_navbar} />
    </header>
  );
   
}
