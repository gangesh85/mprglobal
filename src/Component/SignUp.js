import { useState } from "react";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [telephone, setTelephone] = useState("");

  return (
    <div className="signUp">
      <h2 align="center">SignUp</h2>
      <p className="gitGoolgelLogin">SIGN IN WITH GITHUB</p>
      <p className="gitGoolgelLogin">SIGN IN WITH GOOGLE</p>
      <hr />
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm password</label>
          <br />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="telephone">Mobile No.</label>
          <br />
          <input
            type="tel"
            placeholder="..."
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <div>
          <br />
          <button type="submit">SIGN UP</button>
        </div>
      </form>
      <hr />
      <p>Already have an account? Login here</p>
    </div>
  );
};
