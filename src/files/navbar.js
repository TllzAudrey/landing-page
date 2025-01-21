import React from 'react';
import ReactDOM from 'react-dom/client';

function Lien(props) {
    return <li><a href={props.champ.lien}>{props.champ.name}</a></li>;
}


function NavBar(props) {
    const liens = props.Champs_navbar; //  voir si je peux l'appeller depuis header 
    console.log(liens);
    /*const liens = [
        {name:'email', lien:'#apropos' },
        {name:'test', lien:'text' },
        {name:'youpi', lien:'text' }];*/
    return (
      <>
        <ul>
          {liens.map((lien) => <Lien champ={lien} />)}
        </ul>
      </>
    );
  }

export default NavBar;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NavBar />);
