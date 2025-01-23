import React, { useState } from 'react';

function Projet({value}) {
    return (
        <>
            <div><h3>{value.titre}</h3><p>{value.description}</p></div>
       </>
    );
}




function Projets({champ, titre}) {
    const [projets, setProjets] = useState(champ);
    return (
      <>
        <section id="project">
            <h2>{titre}</h2>
            <div id="projects">
              {projets.map((value) => ( 
                <Projet value={value} /> 
              ))}
            </div>
            
        </section>
      </>
    );
  }

export default Projets;

