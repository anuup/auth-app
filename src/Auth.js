import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

function Auth() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <div>
      {isAuthenticated && (
        <li>
          <p> {user.name} </p>
        </li>
      )}

      {isAuthenticated ? (
        <Button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </Button>
      ) : (
        <Button onClick={() => loginWithRedirect()}>Log In</Button>
      )}
    </div>
  );
}

export default Auth;
