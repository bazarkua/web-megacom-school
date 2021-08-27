import React from "react";
import "./mprojectLogin.css";





class Login extends React.Component {
  render() {
    return (
      <div className="container container1 fs-5">
        <div className="row row-log">
          <div className="col-lg-12">
            <p className="text-center login fw-bold">Авторизация</p>
            <div className="col-lg-12">
              <p className="numInput text-center">Введите номер телефона</p>
              <form>
                <div className="form-group">
                  <input
                    type="Num"
                    className="form-control"
                    id="inputNum"
                    placeholder="Номер телефона"
                  />
                </div>
              </form>
            </div>
            <div className="col-lg-12">
              <p className="passwordInput text-center">Введите пароль</p>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Пароль"
                />
              </div>
              <div className="row row-submit">
                  <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary bg-dark border my-3"
                  >
                    Далее
                  </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
