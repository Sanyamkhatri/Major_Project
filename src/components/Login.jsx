import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section class="container forms">
      <div class="form login">
        <div class="form-content">
          <header>Login</header>
          <form action="#">
            <div class="field input-field">
              <input
                type="email"
                placeholder="Email"
                class="input correction"
              />
            </div>

            <div class="field input-field">
              <input type="password" placeholder="Password" class="password" />
              <i class="bx bx-hide eye-icon"></i>
            </div>

            <div class="form-link">
              <Link to="/" class="forgot-pass">
                Forgot password?
              </Link>
            </div>

            <div class="field button-field">
              <button>Login</button>
            </div>
          </form>

          <div class="form-link">
            <span>
              Don't have an account?
              <Link to="/" className="link login-link">
                SignUp
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
