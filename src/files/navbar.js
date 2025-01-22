import React, { useState } from 'react';

function Lien({value}) {
    return <li><a href={value.lien}>{value.name}</a></li>;
}


function NavBar({champ_navbar}) {
    const [liens, setLiens] = useState(champ_navbar);
    return (
      <>
        <ul>
            {liens.map((value) => ( 
              <Lien value={value} /> 
            ))}
        </ul>
      </>
    );
  }

export default NavBar;

