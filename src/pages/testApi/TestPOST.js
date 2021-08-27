import React from "react";
import "../Admins/admins.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






class TestPOST extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            customer: {
                firstName: props.firstName,
                lastName: props.lastName,
                status: props.status
            }
        }
    }


    handleFirstNameChanged(event) {
        let customer        = this.state.customer;
        customer.firstName  = event.target.value;

        this.setState({ customer: customer });
    }

    handleLastNameChanged(event) {
        let customer      = this.state.customer;
        customer.lastName = event.target.value;

        this.setState({ customer: customer });
    }

    handleStatusChanged(event) {
        let customer    = this.state.customer;
        customer.status = event.target.value;

        this.setState({ customer: customer });
    }

    handleButtonClicked() {

        console.log(this.state.customer);
    }


    render() {

        const notify = () => toast.success('Данные отправлены ✅', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        const notifyWarn = () => toast.warning('Что то пошло не так', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        return (
            <div className="bg-light">
                <label>
                    First Name:
                </label>
                <input type="text" value={this.state.customer.firstName} />
                <br/>
                <label>
                    Last Name:
                </label>
                <input type="text" value={this.state.customer.lastName} />
                <br/>
                <label>
                    Status:
                </label>
                <select value={this.state.customer.status} onChange={this.handleStatusChanged.bind(this)}>
                    <option value="PENDING">
                        Pending
                    </option>
                    <option value="APPROVED">
                        Approved
                    </option>
                </select>
                <hr/>
                <div>
                    <button onClick={() => {
                        notify();
                        notifyWarn();
                    }}>Notify!</button>
                    <ToastContainer/>
                </div>
            </div>
        );
    }
}

export default TestPOST;
