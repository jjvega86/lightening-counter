import React from 'react';

class LightningCounter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            strikes: 0
        };

        this.timerTick = this.timerTick.bind(this);
    }

    componentDidMount(){
        setInterval(this.timerTick, 1000);
    }

    timerTick(){
        this.setState({
            strikes: this.state.strikes + 100
        });
    }

    render(){
        let counterStyle = {
            textAlign: "center",
            color: "#66FFFF",
            fontSize: 50
        }

        let count = this.state.strikes.toLocaleString();

        return(
            <h1 style={counterStyle}>{count}</h1>
        );
    }
}

export default LightningCounter;