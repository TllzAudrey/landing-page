import React, { useState } from 'react';

function Container({value}) {
    return (
        <>
            <div><h3>{value.titre}</h3><p>{value.description}</p></div>
       </>
    );
}




function Containers({champ, titre, lien}) {
    const [containers, setContainers] = useState(champ);
    return (
      <>
        <section id={lien}>
          <div id="container">
            <h2>{titre}</h2>
            <div id="containers">
              {containers.map((value) => ( 
                <Container value={value} /> 
              ))}
            </div>
          </div>
            
        </section>
      </>
    );
  }

export default Containers;

