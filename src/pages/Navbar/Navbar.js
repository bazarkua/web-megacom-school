import React from "react";
import "./navbar.css";
import { withRouter } from "react-router-dom";

const urls = [
  {
    url: "/admins",
    title: "Администраторы",
  },
  {
    url: "/buffet",
    title: "Буфет",
  },
  {
    url: "/courses",
    title: "Курсы",
  },
  {
    url: "/students",
    title: "Студены",
  },
  {
    url: "/",
    title: "Меню",
  },
];

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newUrls: [] };
  }

  nextPath(path) {
    this.props.history.push(path);
  }

  componentDidMount() {
    //sobiraem array

    let newUrls = [];
    console.log(this.props.pathname);
    urls.forEach((url) => {
      if (url.url !== this.props.pathname) newUrls.push(url);
    });

    this.setState({
      newUrls,
    });
  }

  render() {
    return (
      <div className="row">
        {/* <h1 className="bg-light">It is {this.props.pathname}</h1> */}
        <h3>{this.props.history.path}</h3>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark fs-4">
          <div className="container-fluid">
            <button
              className="navbar-brand fs-3 btn-nav btnN"
              onClick={() => this.nextPath(this.props.pathname)}
            >
              {this.props.pathnameTitle}
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                {this.state.newUrls.map((url, index) => (
                  <li className="nav-item" key={index}>
                    <button
                      className="nav-link btn-link fs-4 btn-nav btnN fw-light"
                      onClick={() => this.nextPath(url.url)}
                    >
                      {url.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
