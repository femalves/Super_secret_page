import React from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import "./sign-up.scss";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    // TO DO: Create a alerts
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="form-container">
        <span className="title">
          If you don't have an account, sign up below.
        </span>
        <div className="sign-up">
          <form onSubmit={this.handleSubmit}>
            <h3>SIGN UP</h3>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              onChange={this.handleChange}
              label="Username"
              required
            />
            <FormInput
              name="email"
              type="email"
              handleChange={this.handleChange}
              value={email}
              label="Email"
              required
            />
            <FormInput
              name="password"
              type="password"
              value={password}
              handleChange={this.handleChange}
              label="Password"
              required
            />
            <FormInput
              name="confirmPassword"
              type="Password"
              value={confirmPassword}
              handleChange={this.handleChange}
              label="Confirm Password"
              required
            />
            <div className="buttons">
              <CustomButton type="submit">SIGN UP</CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
