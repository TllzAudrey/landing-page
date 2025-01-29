import '../App.css';
function image_gauche(props) {
    return (
        <section id={props.lien}>
            <h2 class="title-gauche">{props.titre}</h2>
            <div class="flex-container">
                <div id="colum-image"> <img src={props.image} className="image-column" alt={props.alt} /></div>
                <div>
                    <h3 className="soustitre-gauche">{props.soustitre}</h3>
                    <p className="message-gauche">{props.paragraphe1}</p>
                    <p className="message-gauche">{props.paragraphe2}</p>
                </div>
            </div>
        </section>
    );
  }
   export default image_gauche;