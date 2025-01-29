import React, { useState } from 'react';

function Container({value}) {
    return (
        <>
            <div><h3>{value.titre}</h3><h4>{value.soustitre}</h4><p>{value.description}</p><p>{value.description2}</p></div>
       </>
    );
}

function Apropos({champ, titre, lien}) {
    const [containers, setContainers] = useState(champ);
    return (
      <>
        <section id="apropos" >
          <div id={lien} class="container" >
            <h2>{titre}</h2>
            <div id="apropos-cont">
              {containers.map((value) => ( 
                <Container value={value} /> 
              ))}
            </div>
          </div>
            
        </section>
      </>
    );
  }
export default Apropos;


