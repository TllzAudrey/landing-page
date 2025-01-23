function Footer(props) {
    return (
      <div class="footer">
    
        <h1 className="footer-title">
          {props.titre}
        </h1>
        <p className="footer-message">
          Merci d'avoir visité mon portfolio ! 🌟 | © 2025 {props.nom} | Let's create something amazing together!
        </p>
      </div>
    );
  }
   export default Footer;