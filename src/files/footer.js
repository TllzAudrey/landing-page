function Footer(props) {
    return (
      <div class="footer">
    
        <h1 className="footer-title">
          {props.titre_header}
        </h1>
        <p className="footer-message">
            {props.message_header}
        </p>
      </div>
    );
  }
   export default Footer;