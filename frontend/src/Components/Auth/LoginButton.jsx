import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return <button className="nav-button text-purple font-bold ml-auto" onClick={() => loginWithRedirect()}>Log In</button>;
}

export default LoginButton;
