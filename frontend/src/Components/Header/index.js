import "./Header.css";
import LoginButton from "./LoginButton";

function Header() {
  return (
    <header>
      <a href="/">
        <h1>Angle</h1>
      </a>
      <nav>
        <a href="/">
          <div>Home</div>
        </a>
        <LoginButton />
      </nav>
      
    </header>
  );
}

export default Header;
