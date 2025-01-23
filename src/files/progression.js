import React, { useState } from 'react';

function Progression({value}) {
    return (
        <>
          <label for="matiere">{value.matiere}</label>
          <progress id="matiere" max="100" value={value.perc}>{value.perc}%</progress>
        </>
    );
}

function Progressions({champ, titre, soustitre,image}) {
    const [progressions, setProgressions] = useState(champ);
    return (
      <>
        <h2>{soustitre}</h2>
        <div id="progression_bars">
          {progressions.map((value) => ( 
            <Progression value={value} /> 
          ))}
        </div>
      </>
    );
  }

export default Progressions;

