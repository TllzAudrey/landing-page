import React, { useState } from 'react';

function Projet({value}) {
    return (
        <>
            <div class="project"><h3>{value.titre}</h3><p>{value.description}</p></div>
       </>
    );
}




function Projets({champ_projet}) {
    const [projets, setProjets] = useState(champ_projet);
    return (
      <>
        <section id="projects">
            <h2>Mes projets récents</h2>
            {projets.map((value) => ( 
              <Projet value={value} /> 
            ))}
        </section>
      </>
    );
  }

export default Projets;

