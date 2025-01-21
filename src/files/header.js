import NavBar from './navbar';
function Header(props) {
    return (
      <>
      <NavBar class="navbar" Champs_navbar={props.Champs_navbar}/>
      <div class="header">
        <div class="header-left">
          <img src={props.profil} className="profil" alt="photo-profil" />
        </div>
        <div class="header-right">
          <h1 className="header-title"> {props.titre_header} </h1>
          <p className="header-message"> {props.message_header} </p>
          <div class="liens">
            <img src={props.ImgMail} className="icon" alt="icon" />
            <p>{props.mail}</p>
          </div>
          <div class="liens">
            <img src={props.ImgMap} className="icon" alt="icon" />
            <p>{props.map}</p>
          </div>
          <div class="liens">
            <img src={props.ImgMap} className="icon" alt="icon" />
            <p>{props.num}</p>
          </div>

        </div>
      </div>
      </>
    );
  }
   export default Header;