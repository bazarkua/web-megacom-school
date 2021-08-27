import React from 'react';



class Clock extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidUnmount()
    {
        this.intervalID = setInterval(() =>
        this.updateClock(), 1000);
    }

    comonentWillUnmount()
    {
        clearInterval(this.intervalID)
    }

    updateClock(){
        this.setState({
          time: new Date().toLocaleTimeString()
        });
    }

    render() {
        return (
            <div className="Time bg-light">
                <p>{this.state.time}</p>
            </div>
        );
    }

}

export default Clock;


