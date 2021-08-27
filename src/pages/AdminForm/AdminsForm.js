import React from 'react';
import './admins-form.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






class AdminsForm extends React.Component{


  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        phone: '',
        pin: ''
      },
      isLoading: false,
      isError: false,
    };
  }

  notifications = (serverRes) => {
        switch (serverRes) {
          case 500:
          {
            this.notifyErr();
            break;
          }
          case 200:
          {
            this.notify();
            break;
          }
          case 404:
          {
            this.notifyErr();
            break;
          }

          default:
            this.notify();
        }

}


  nextPath(path) {
    this.props.history.push(path);
  }

  handleActiveChanged(event) {
    let user = this.state.user;
    user.active  = event.target.value;

    this.setState({ user: user });
  }

  handleNameChanged(event) {
    let user      = this.state.user;
    user.name = event.target.value;

    this.setState({ customer: user });
  }

  handlePhoneChanged(event) {
    console.log(event);
    let user    = this.state.user;
    user.phone = event.target.value;

    this.setState({ user: user });
  }

  handlePinChanged(event) {
    let user    = this.state.user;
    user.pin = event.target.value;

    this.setState({ user: user });
  }

  notify = () => toast.success('Данные отправлены ✅', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });


  notifyWarn = () => toast.warning('Warning', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });


  notifyErr = () => toast.error('Ошибка', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });


  handleButtonClicked(event) {
    console.log(this.state.user);

    fetch('https://app.megacom.kg:9090/test-app/api/v1/user/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.user)
    })

        .then(response => {

          console.log(response.status);

          this.notifications(response.status);



          if (response.ok) {
            return response.json();
          } else {
            this.setState({ isError: true, isLoading: false });
          }
        })
        .then(data => {
          this.setState({ isLoading: false });
        })

  }

    render(){

        return(
            <div>
        <div className="row">
          <div className="col-md-4">
            <div className="col-md-3">
              <button onClick={() => this.nextPath("/admins")} type="submit" className="btn-back float-end btn-primary bg-dark border my-4">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="container font-lighter bg-light">  
          <div className="row-8 fs-3 fw-bold py-5">Администраторы</div> 
          <div className="row fs-4">
            <div className="col-12 text-center my-3">Личные данные</div>
          </div>
          <div className="row my-3">
            <div className="col-md-4">
              <input type="Num" className="form-control" id="inputNum" placeholder="Фамилия" />
            </div>
            <div className="col-md-4">
              <input type="text" value={this.state.user.name} onChange = {this.handleNameChanged.bind(this)} className="form-control" id="inputNum" placeholder="Имя" />
            </div>
            <div className="col-md-4">
              <input type="Num" className="form-control" id="inputNum" placeholder="Отчество" />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-md-4">
              <input type="Num" className="form-control" id="inputNum" placeholder="Логин" />
            </div>
            <div className="col-md-4">
              <input type="Num" value={this.state.user.pin} onChange={this.handlePinChanged.bind(this)} className="form-control" id="inputNum" placeholder="Пин-код" />
            </div>
            <div className="col-md-4">
              <input type="Num" value = {this.state.user.phone} onChange={this.handlePhoneChanged.bind(this)} className="form-control" id="inputNum" placeholder="Номер телефона" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <input type="Num" className="form-control" id="inputNum" placeholder="Пароль" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <button onClick={this.handleButtonClicked.bind(this)} type="submit" className="btn float-end btn-primary bg-dark border my-4">Добавить</button>
              <ToastContainer/>
            </div>
            <div className="col-md-6" />
          </div>
        </div>
      </div>
        )

    }
}

export default AdminsForm;