import '../App.css';
function image_droite(props) {
    return (
        <section id={props.lien}>
            <h2 className="title-droite">{props.titre}</h2>
            <div class="flex-container">
                <div >
                    <h3 className="soustitre-droite">{props.soustitre}</h3>
                    <p className="message-droite">{props.message}</p>

                </div>
                <div id="colum-image"> <img src={props.image} className="image-column" alt={props.alt} /></div>
            </div>
        </section>

    );
  }
   export default image_droite;