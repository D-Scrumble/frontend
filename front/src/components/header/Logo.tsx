import mainLogo from "/logo.png";
import "./styles/logo.css";

const Logo = () => {
  return (
    <div className="header__logo">
      <a href="/">
        <img
          className="header__logo-img"
          src={mainLogo}
          alt="D-scrumble main logo"
        />
      </a>
    </div>
  );
};

export default Logo;
