import React, { useState } from 'react';
import Progression from './progression';

function ProgressionBars({champ, titre,lien}) {
    const [progressionBar, setProgressionBar] = useState([
        {matiere:"HTML5", perc:70}, 
        {matiere:"CSS3", perc:50}, 
        {matiere:"JavaScript", perc: 30}, 
        {matiere:"React", perc: 90}
      ]);
    return (
      <>
        <section id={lien} >
          <div id="progression_cont">
            <div id="cv"> 
              <img src='./CV/CV.png' class="image-cv" alt="image" />
              <button class="Documents-btn" onClick={() => window.open('./CV/CV.pdf', '_blank')}>Mon CV</button>
            </div>
            <div id="progbar">
              <h1>{titre}</h1>
              <Progression champ={progressionBar} soustitre="Front End"/>
              <Progression champ={progressionBar} soustitre="back End"/>
            </div>
          </div>
        </section>
      </>
    );
  }

export default ProgressionBars;

