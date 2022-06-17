import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

export const ProfileUser = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return (
      <div className="container-profile">
        <h1>
          Loading<span className="loader"></span>
        </h1>
      </div>
    )
  }

  return (
    isAuthenticated && (
      <div className="container-info-mail">
        <img className="img-mail" src={user.picture} alt={user.name} />
        <div className="container-info-personal">
          <h2 className="name">Nombre: {user.name}</h2>
          <p className="email">Email: {user.email}</p>
          <input
            type="button"
            value="Edit Profile"
            className="btn-edit-profile"
            onClick={toggleProfile}
          />
          <div className="container-edit-profile">
            <textarea
              name="textarea"
              placeholder="Descripcion..."
              className="textarea"
              cols="36"
              rows="10"
            ></textarea>
            <div className="container-modified">
              <button className="btn-modified-edit">Save</button>
              <button className="btn-modified-delete">
                <i class="ri-delete-bin-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
