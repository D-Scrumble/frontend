import "./styles/header.css";
import Logo from "./Logo";
import CreatePost from "./CreatePost";
import Login from "./Login";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="nav">
        <CreatePost />
        <Login />
      </nav>
    </header>
  );
};

export default Header;
