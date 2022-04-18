import React from "react";
import picture from "../../assets/bosque_pic.jpg";

export class LoginForm extends React.Component {
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
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
           <h1>El Bosque</h1>
          </div>
          <div className="card-body">
            <form className="col-12" onSubmit={this.handleSubmit}>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="material-icons form-icon">perm_identity</span>
                </div>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="username"
                  name="userName"
                  value={this.state.userName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="material-icons form-icon">
                  lock
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-center">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
