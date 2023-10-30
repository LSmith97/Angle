import "./Header.css";
import LoginButton from "../Auth/LoginButton";
import LogoutButton from "../Auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import UserDisplay from "./UserDisplay";

function Header() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <header>
      <a href="/">
        <h1>Angle</h1>
      </a>
      <nav>
        <a href="/">
          <div className="nav-button">Home</div>
        </a>
        {!isLoading && isAuthenticated ? (
          <>
            <LogoutButton />
            <UserDisplay user={user} />
          </>
        ) : (
          <LoginButton />
        )}
      </nav>
    </header>
  );
}

export default Header;
