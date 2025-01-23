import '../App.css';
function image_gauche(props) {
    return (
        <section>
            <h2 class="title-gauche">{props.titre}</h2>
            <div class="flex-container" id={props.lien}>
                <div id="colum-image"> <img src={props.image} className="image-column" alt="image" /></div>
                <div>
                    <h3 className="soustitre-gauche">{props.soustitre}</h3>
                    <p className="message-gauche">{props.message}</p>
                </div>
            </div>
        </section>
        

    );
  }
   export default image_gauche;