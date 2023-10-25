import "./Header.css"

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
        <a href="/login">
          <div>Log in</div>
        </a>
      </nav>
    </header>
  );
}

export default Header;
