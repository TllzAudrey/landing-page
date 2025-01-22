function Footer(props) {
    return (
      <div class="footer">
    
        <h1 className="footer-title">
          {props.titre}
        </h1>
        <p className="footer-message">
            {props.message}
        </p>
      </div>
    );
  }
   export default Footer;