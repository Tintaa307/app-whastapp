import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

export const LogoutButton = () => {
    const { logout } = useAuth0()
    
    return (
      <div className="container-all-logout">
        <div className="container-btn">
          <button 
            className="logout-button" 
            onClick={() => logout({ returnTo: window.location.orgin })}
          >
            Logout
          </button>
        </div>
      </div>
    )
}

export default LogoutButton