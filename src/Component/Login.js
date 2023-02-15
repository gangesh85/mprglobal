import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {};

  return (
    <div className="signUp">
      <h2 align="center">Login</h2>
      <p className="gitGoolgelLogin">SIGN IN WITH GITHUB</p>
      <p className="gitGoolgelLogin">SIGN IN WITH GOOGLE</p>
      <hr />
      <form>
        <div>
          <label htmlFor="email">user name</label>
          <br />
          <input
            type="email"
            placeholder="..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            placeholder="..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div>
          <button type="submit" onClick={handleClick}>
            Login
          </button>
          <button type="reset">Reset</button>
        </div>
      </form>{" "}
      <br />
      <hr />
      <p>Don't have an account? SignUp here</p>
    </div>
  );
};
