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
        <h1 className='bg-white text-purple text-xl hover:cursor-pointer '>ANGLE</h1>
      </Link>
      <nav>
        <Link to="/">
          <div className=" text-purple font-bold nav-button hover:cursor-pointer">Home</div>
        </Link>
        {!isLoading && isAuthenticated ? (
          <>
            <UserDisplay user={user} />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </nav>
    </header>
  );
}

export default Header;
