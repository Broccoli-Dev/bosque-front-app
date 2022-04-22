import React from "react";
import "./LoginStep.scss";

export class LoginStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "userName")
      this.setState({ userName: event.target.value });
    if (event.target.name === "password")
      this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    alert(`El usuario es: ${this.state.userName}
        El password es: ${this.state.password}`);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="LoginStep__card">
          <div className="LoginStep__card-header">
            <h1>El Bosque</h1>
          </div>
          <div className="LoginStep__card-body">
            <form className="" onSubmit={this.handleSubmit}>
              <div className="LoginStep__card-body__container">
                <span className="material-icons">perm_identity</span>
                <h2>Usuario</h2>
              </div>
              <div className="LoginStep__card-body__container">
                <input
                  type="text"
                  className="field"
                  placeholder="username"
                  name="userName"
                  value={this.state.userName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="LoginStep__card-body__container">
                <span className="material-icons">lock</span>
                <h2>Contrasena</h2>
              </div>
              <div className="LoginStep__card-body__container">
                <input
                  type="password"
                  className="field"
                  placeholder="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>

              <div className="LoginStep__card-body__container button-container">
                <input type="submit" value="Login" className="btn" />
              </div>
            </form>
          </div>
          <div className="LoginStep__card-footer">
            <div className="">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
