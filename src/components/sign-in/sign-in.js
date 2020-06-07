import React from "react";

import "./sign-in.scss";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { history } = this.props;

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/secret");
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

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
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                SIGN IN WITH GOOGLE
              </CustomButton>
              <CustomButton type="submit"> SIGN IN </CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
