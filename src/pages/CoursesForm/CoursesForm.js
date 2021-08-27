import React from 'react';
import './courses-form.css';

class CoursesForm extends React.Component{
  nextPath(path) {
    this.props.history.push(path);
  }
    render(){
        return(
            <div>
            <div className="row">
              <div className="col-md-4">
                <div className="col-md-3">
                  <button onClick={() => this.nextPath("/courses")} type="submit" className="btn-back float-end btn-primary bg-dark border my-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="container font-lighter bg-light">  
              <div className="row-8 fs-3 fw-bold py-5">Курсы</div> 
              <div className="row">
                <div className="col-md-8 my-3">
                  <input type="Num" className="form-control" id="inputNum" placeholder="Наиминование курса" />
                </div>
                <div className="col-md-4 my-3">
                  <input type="Num" className="form-control" id="inputNum" placeholder="Длительность" />
                </div>
              </div>
              <div className="row fs-4">
                <div className="col-1 text-center my-2">Сведения</div>
              </div>
              <div className="row my-2">
                <div className="col-md-12 my-2">
                  <input type="Num" className="form-control" id="inputNum" placeholder="ФИО Ментора" />
                </div>
                <div className="col-md-12 my-2">
                  <input type="Num" className="form-control" id="inputNum" placeholder="ФИО Ассистента" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <input type="Num" className="form-control" id="inputNum" placeholder="Дата начало" />
                </div>
                <div className="col-md-4">
                  <input type="Num" className="form-control" id="inputNum" placeholder="Дата окончания" />
                </div>
                <div className="col-md-4">
                  <input type="Num" className="form-control" id="inputNum" placeholder="Стоимость" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 my-3">
                  <input type="Num" className="form-control" id="inputNum" placeholder="Аудитория" />
                </div>
                <div className="col-md-4 my-3">
                  <input type="Num" className="form-control" id="inputNum" placeholder="Время занятий" />
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


export default CoursesForm;
