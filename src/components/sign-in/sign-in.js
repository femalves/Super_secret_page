import React from "react";

import "./sign-in.scss";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="form-container">
        <span className="title">
          If you already have an account, sign in below.
        </span>
        <div className="sign-in">
          <form onSubmit={this.handleSubmit}>
            <h3>SIGN IN</h3>

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

            <div className="buttons">
              <CustomButton isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
              <CustomButton type="submit"> SIGN IN </CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
