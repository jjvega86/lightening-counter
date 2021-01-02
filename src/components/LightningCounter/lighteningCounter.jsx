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
        let headerStyle = {
            textAlign: "center",
            color: "white"
        }

        return(
            <h1 style={headerStyle}>{this.state.strikes}</h1>
        );
    }
}

export default LightningCounter;