import React from "react";
import "./mprojectMenu.css";


const containerStyle = {
  color: "black",
  width: 350,
  paddingTop: 200
};

const rowStyle = {
  borderRadius: "10px",
  backgroundColor: "white",
};


class Menu extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      
        <div>
          <div className="container" style={containerStyle}>
            <div className="row text-center" style={rowStyle}>
              <div className="col-lg-12">
                <button
                  className="a btn numInput text-reset text-decoration-none text-center fs-3 fw-light"
                  onClick={() => this.nextPath("/admins")}
                >
                  Администраторы
                </button>
              </div>

              <div className="col-lg-12">
                <button
                  className="a btn text-reset text-decoration-none text-center fs-3 fw-light"
                  onClick={() => this.nextPath("/courses")}
                >
                  Курсы
                </button>
              </div>

              <div className="col-lg-12">
                <button
                  className="a btn text-reset text-decoration-none text-center fs-3 fw-light"
                  onClick={() => this.nextPath("/students")}
                >
                  Студенты
                </button>
              </div>
              <div className="col-lg-12">
                <button
                  className="a btn text-reset text-decoration-none text-center fs-3 fw-light"
                  onClick={() => this.nextPath("/buffet")}
                >
                  Буфет
                </button>
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}

export default Menu;
