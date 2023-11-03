import "./Header.css";
import LoginButton from "../Auth/LoginButton";
import LogoutButton from "../Auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import UserDisplay from "./UserDisplay";
import { Link } from "react-router-dom";

function Header() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <header>
      <Link to="/">
        <h1>Angle</h1>
      </Link>
      <nav>
        <Link to="/">
          <div className="nav-button">Home</div>
        </Link>
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
