import React, { useState } from 'react';

function Container({value}) {
    return (
        <>
            <div id={value.lien} ><h3>{value.titre}</h3><h4>{value.soustitre}</h4><p>{value.description}</p></div>
       </>
    );
}

function Containers({champ, titre, soustitre, lien}) {
    const [containers, setContainers] = useState(champ);
    return (
      <>
        <section id="container" >
          <div id={lien} >
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

