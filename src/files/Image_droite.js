import '../App.css';
function image_droite(props) {
    return (
        <div class="flex-container">
            <div >
                <h1 className="title-droite">{props.titre}</h1>
                <h2 className="soustitre-droite">{props.soustitre}</h2>
                <p className="message-droite">{props.message}</p>

            </div>
            <div id="colum-image"> <img src={props.image} className="image-column" alt="image" /></div>
        </div>

    );
  }
   export default image_droite;