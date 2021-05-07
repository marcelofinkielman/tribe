import React from 'react';
import "./LoginPage.scss"


function LoginPage() {
  return (
    <div className="login">
      <form className="login__form">
        <div className="login__inner-form">
          <h3 className="login__username">
            UserName
        <input className="login__input-username"
              name="login"
              type="text"
              placeholder="Login"
            />

          </h3>
          <h3 className="login__password">
            Password
          <input className="login__input-password"
              name="password"
              type="password"
              placeholder="Password"/>
          </h3>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
