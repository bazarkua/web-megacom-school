import React from 'react';
import './buffet-form.css';

class BuffetForm extends React.Component{
  nextPath(path) {
    this.props.history.push(path);
  }
    render(){
        return(

            <div>
            <div className="row">
              <div className="col-md-4">
                <div className="col-md-3">
                  <button onClick={() => this.nextPath("/buffet")} type="submit" className="btn-back float-end btn-primary bg-dark border my-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="container font-lighter bg-light">  
              <div className="row-8 fs-3 fw-bold py-5">Выпечка</div> 
              <div className="row fs-4">
                <div className="col-12 text-center my-3">Данные</div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <input type="Num" className="form-control" id="inputNum" placeholder="Название" />
                </div>
                <div className="col-md-4">
                  <input type="Num" className="form-control" id="inputNum" placeholder="Стоимость" />
                </div>
                <div className="col-md-4">
                  <input type="Num" className="form-control" id="inputNum" placeholder="Описание" />
                </div>
              </div>
              <div className="row my-3">
                <div className="col-6">
                  <input type="Num" className="form-control" id="inputNum" placeholder="загрузить картинку" /></div>
                <div className="col-4">
                  <button type="submit" className="btn btn-trash float-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10 my-2">
                  <button type="submit" className="btn float-end btn-primary bg-dark border my-4 fs-5">Добавить</button>
                </div>
                <div className="col-md-4" />
              </div>
            </div>
          </div> 

        )
    }

}


export default BuffetForm;