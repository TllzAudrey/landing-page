import '../App.css';
function image_droite(props) {
    return (
        <div class="flex-container">
            
            <div>
                <h1 className="title-droite">{props.titre}</h1>
                <p className="message-droite">{props.message}</p>
            </div>
            <div> <img src={props.logo} className="image-droite" alt="image" /></div>
        </div>

    );
  }
   export default image_droite;