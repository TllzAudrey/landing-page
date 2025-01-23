import '../App.css';
function image_gauche(props) {
    return (
        <div class="flex-container" id={props.lien}>
            <div id="colum-image"> <img src={props.image} className="image-column" alt="image" /></div>
            <div>
                <h1 className="title-gauche">{props.titre}</h1>
                <h2 className="soustitre-gauche">{props.soustitre}</h2>
                <p className="message-gauche">{props.message}</p>
            </div>
            

        </div>

    );
  }
   export default image_gauche;