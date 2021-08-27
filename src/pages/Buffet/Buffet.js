import React from "react";
import "./buffet.css";
import Navbar from "../Navbar/Navbar";
import BuffetCard from "../BuffetCard/BuffetCard";


/*let newArr = Array(20);
console.log(newArr.length);*/

class Buffet extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div>
        <Navbar pathname="/buffet" pathnameTitle="Буфет" />

        <div className="container font-lighter bg-light">
          <div className="row">
            <div className="col-12 text-end">
              <button
                onClick={() => this.nextPath("/buffet-form")}
                type="submit"
                className="btn bg-dark border my-5"
              >
                Добавить
              </button>
            </div>
          </div>
          <div className="row menu-row">
            <BuffetCard/>
          </div>
        </div>
      </div>
    );
  }
}

export default Buffet;
