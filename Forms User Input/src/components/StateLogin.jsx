import { useState } from "react";
import Input from "./Input.jsx";

export default function Login() {
  // const [Email, setEmail] = useState("");
  // const [Password, setPassword] = useState("");
  const [enteredValues, setenteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  const passIsInvslid = didEdit.password && enteredValues.password.trim().length < 6;

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted!!!");
  }

  function handleInputChange(identifier, value) {
    setenteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
          <Input
            label="Email"
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
            error={emailIsInvalid && 'Please enter a valid email'}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            name="password"
            onBlur={() => handleInputBlur("password")}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValues.password}
            error={passIsInvslid && 'Please enter a valid Paasword'}
          />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
