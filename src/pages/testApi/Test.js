import React from "react";
import "../Admins/admins.css"




class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      isError: false,
    };
  }

  renderTableRows = () => {
    return this.state.users.map((user, index) => {
      console.log(user);
      return (

          <div className="grey-box" key = {index}>
          <div className="row">
            <div className="col-md-2 fw-bold">Админ:</div>
            <div className="col-md-2">{user.name}</div>
            <div className="col-md-8">
              <button type="submit" className="btn btn-trash float-end">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </button>
              <button type="submit" className="btn btn-edit float-end">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </button>
            </div>
          </div>
      <div className="row my-2">
        <div className="col-md-2 fw-bold">Курс:</div>
        <div className="col-md-2 ">Flutter</div>
      </div>
      <div className="row my-2">
        <div className="col-md-2 fw-bold">Номер телефона:</div>
        <div className="col-md-2">{user.phone}</div>
        <div className="col-md-2 fw-bold">Логин:</div>
        <div className="col-md-3">{user.phone}</div>
      </div>
      <div className="row my-2">
        <div className="col-md-2 fw-bold">Пин код:</div>
        <div className="col-md-2">{user.pin}</div>
      </div>
          </div>
      );
    });
  };

  /*renderTableHeader = () => {
    return Object.keys(this.state.users[0]).map((attr) => (
      <th key={attr}>{attr.toUpperCase()}</th>
    ));
  };*/


  componentDidMount() {
    fetch('https://app.megacom.kg:9090/test-app/api/v1/user/all')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        this.setState({ isError: true, isLoading: false });
      }
    })
    .then(data => {
      this.setState({ users:data, isLoading: false });
    })
  }

  render() {
    const { isLoading, isError } = this.state;

    console.log(this.state.users.length);


    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      return <div>Error</div>;
    }
    else {
      return (
          <>
            {/* {this.renderTableHeader()}*/}
            {this.renderTableRows()}
          </>);
    }

  }

}

export default Test;
