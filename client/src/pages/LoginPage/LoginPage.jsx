import React from 'react';
import "./LoginPage.scss"
import { Link } from "react-router-dom"


function LoginPage({ updatedUser }) {
  console.log(updatedUser)
  return (
    <div className="login">
      <form className="login__form">
        <div className="login__inner-form">
          <h3 className="login__username">
            <label className="login__label">Username</label>
            <input className="login__input-username"
              name="login"
              type="text"
              placeholder="Login"
              autoComplete="off"
            />

          </h3>
          <h3 className="login__password">
            <label className="login__label">Password</label>
            <input className="login__input-password"
              name="password"
              type="password"
              placeholder="Password" />
          </h3>
          <Link to="/profile" className="login__link">
            <button className="login__button" onClick={() => updatedUser()}>
            Submit
            </button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
