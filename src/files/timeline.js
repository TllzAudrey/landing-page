import React, { useState } from 'react';

function Date({value}) {
    return (
        <>
            <li class="tl-item" ng-repeat="item in retailer_history">
                <div class="timestamp">
                    {value.date}
                </div>
                <div class="item-title">{value.titre}</div>
                <div class="item-detail">{value.detail}</div>
            </li>
       </>
    );
}

function Timeline({champ, titre, lien}) {
    const [timeline, setTimeline] = useState(champ);
    return (
      <>
        <section id="container-timeline">
          <div id={lien}>
            <h2>{titre}</h2>
            <div class="history-tl-container">
                <ul class="tl">
                    {timeline.map((value) => ( 
                        <Date value={value} /> 
                    ))}
                </ul>
            </div>
          </div>
            
        </section>
      </>
    );
  }

export default Timeline;

