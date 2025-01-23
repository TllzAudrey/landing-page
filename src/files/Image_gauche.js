import '../App.css';
function image_gauche(props) {
    return (
        <div class="flex-container2">
            <div> <img src={props.logo} className="image-gauche" alt="image" /></div>
            <div>
                <h1 className="title-gauche">{props.titre}</h1>
                <h2 className="title2-gauche">{props.titre}</h2>
                <p className="message-gauche">{props.message}</p>
            </div>
            

        </div>

    );
  }
   export default image_gauche;