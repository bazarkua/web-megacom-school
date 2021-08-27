import React from 'react';
import './students-form.css';

class StudentsForm extends React.Component{
  nextPath(path) {
    this.props.history.push(path);
  }
    render(){
        return(
            <div>
            <div className="row">
              <div className="col-md-4">
                <div className="col-md-3">
                  <button onClick={() => this.nextPath("/students")} type="submit" className="btn-back float-end btn-primary bg-dark border my-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="container font-lighter bg-light">  
              <div className="row-8 fs-3 fw-bold py-5">Студент</div> 
              <div className="row fs-4">
                <div className="col-12 text-center py-3">Личные данные</div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <input type="Num" className="form-control" id="inputNum" placeholder="Фамилия" />
                </div>
                <div className="col-md-4">
                  <input type="Num" className="form-control" id="inputNum" placeholder="Имя" />
                </div>
                <div className="col-md-4">
                  <input type="Num" className="form-control" id="inputNum" placeholder="Отчество" />
                </div>
              </div>
              <div className="row py-3">
                <div className="col-md-4">
                  <input type="Num" className="form-control" id="inputNum" placeholder="Логин" />
                </div>
                <div className="col-md-4">
                  <input type="Num" className="form-control" id="inputNum" placeholder="Пин-код" />
                </div>
                <div className="col-md-4">
                  <input type="Num" className="form-control" id="inputNum" placeholder="Номер телефона" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <input type="Course" className="form-control" id="inputNum" placeholder="Курс" />
                </div>
                <div className="col-md-4">
                  <input type="Baige-Num" className="form-control" id="inputNum" placeholder="Номер бейджика" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 my-4">
                  <input type="Num" className="form-control" id="inputNum" placeholder="Email" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <button type="submit" className="btn float-end btn-primary bg-dark border my-4">Добавить</button>
                </div>
                <div className="col-md-6" />
              </div>
            </div>
          </div>
        )
    }
}


export default StudentsForm;