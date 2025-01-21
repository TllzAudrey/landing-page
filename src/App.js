import logo from './logo.svg';
import profil from './audrey.jpg';
import ImgMail from './mail.png';
import ImgMap from './map.png';
import ImgNumero from './numero.png';
import './App.css';
import Header from './files/header';
import Footer from './files/footer';
import Image_droite from './files/Image_droite';
import Image_gauche from './files/Image_gauche';

function App() {
  let titre_header = 'hiiiiiii ';
  let message_header ='Merci de visiter notre vaisseau spatial !';
  let Champs_navbar= [
    {name:'email', lien:'#apropos' },
    {name:'email', lien:'text' },
    {name:'email', lien:'text' }

  ]
  return (
    <>
      <Header Champs_navbar={Champs_navbar} titre_header={titre_header} message_header={message_header} profil={profil} ImgMail={ImgMail} mail="telliez.a@gmail.com" ImgMap={ImgMap} map="Saint-Doulchard" ImgNumero={ImgNumero} num="06 28 18 79 92"/>

      <Image_droite titre="Test" message="message_header" logo={logo} />
      <Image_gauche titre={titre_header} message={message_header} logo={logo}  />
      <Image_droite titre={titre_header} message={message_header} logo={logo} />

      <Footer titre_footer={titre_header} message_footer={message_header} logo={logo} />
    
    </>
   
  );
}

export default App;
