import { useState } from "react";
import axios from "axios";
import { SHA256 } from "crypto-js";

const Signup = () => {
  const SignupAction = async (
    name,
    username,
    email,
    password,
    rpassword,
    phone,
    address
  ) => {
    try {
      if (
        name === "" ||
        username === "" ||
        email === "" ||
        password === "" ||
        rpassword === "" ||
        phone === "" ||
        address === ""
      ) {
        throw new Error("Some user fields are not valid");
      }

      if (rpassword !== password) {
        throw new Error("Repeat password does not match password");
      }

      const data = {
        name: name,
        username: username,
        email: email,
        password_hash: SHA256(password).toString(),
        phone: phone,
        address: address,
      };

      const result = await axios.post(
        "http://localhost:3000/user/signup",
        data
      );

      if (result.data.status) {
        setMessage(result.data.success.message);
        setSuccess(true);
        setName("");
        setUsername("");
        setEmail("");
        setPassword("");
        setRPassword("");
        setPhone("");
        setAddress("");
      } else {
        setMessage(result.data.error.message);
        setSuccess(false);
      }
    } catch (error) {
      if (error.response !== undefined) {
        setMessage(error.response.data.error.message);
      } else {
        setMessage("Some user fields are not valid");
      }
      setSuccess(false);
    }
  };

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  return (
    <div className="mx-auto my-4 col-10">
      <h2 className="text-center m-4">Signup</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="profile-name"
            placeholder="Profile name"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            value={username}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="rpassword"
            placeholder="Repeat password"
            onChange={(event) => {
              setRPassword(event.target.value);
            }}
            value={rPassword}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Phone"
            onChange={(event) => {
              setPhone(event.target.value);
            }}
            value={phone}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Address"
            onChange={(event) => {
              setAddress(event.target.value);
            }}
            value={address}
          />
        </div>
        <p className={success ? "text-success" : "text-danger"}>{message}</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            SignupAction(
              name,
              username,
              email,
              password,
              rPassword,
              phone,
              address
            );
          }}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
