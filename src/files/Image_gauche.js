import '../App.css';
function image_gauche(props) {
    return (
        <div class="flex-container">
            <div> <img src={props.logo} className="image-gauche" alt="image" /></div>
            <div>
                <h1 className="title-gauche">{props.titre_header}</h1>
                <p className="message-gauche">{props.message_header}</p>
            </div>
            

        </div>

    );
  }
   export default image_gauche;