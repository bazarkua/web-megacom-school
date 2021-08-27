import React from "react";
import "./admins.css";
import Navbar from "../Navbar/Navbar";
import TestV2 from "../testApi/TestV2";

class Admins extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div>
        <Navbar pathname="/admins" pathnameTitle="Администраторы" />
        <div className="container font-lighter bg-light">
          <div className="row d-flex justify-content-end">
            <div className="col-6 my-3 py-2">
              <button
                type="submit"
                onClick={() => this.nextPath("/admins-form")}
                className="btn btnadd bg-dark border"
              >
                Добавить
              </button>
            </div>
          </div>
          <TestV2/>
        </div>
      </div>
    );
  }
}
export default Admins;
