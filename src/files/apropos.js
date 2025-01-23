import React, { useState } from 'react';

function Apropos({description, titre, lien}) {
    return (
      <>
        <section id={lien}>
            <div id="apropos">
                <h2>{titre}</h2>
                <p>{description}</p>
            </div>
            
        </section>
      </>
    );
  }

export default Apropos;


