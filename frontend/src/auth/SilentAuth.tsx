import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SilentAuth = () => {
  const { isAuthenticated, getAccessTokenSilently, loginWithRedirect } =
    useAuth0();

  useEffect(() => {
    const checkSession = async () => {
      try {
        await getAccessTokenSilently();
      } catch (error) {
        if (error === "login_required") {
          loginWithRedirect();
        }
      }
    };

    if (!isAuthenticated) {
      checkSession();
    }
  }, [isAuthenticated, getAccessTokenSilently, loginWithRedirect]);

  return null;
};

export default SilentAuth;
