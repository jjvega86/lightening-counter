import React from 'react';
import '../LighteningCounterDisplay/LighteningCounterDisplay.css'
import LighteningCounter from '../LighteningCounter/lighteningCounter';

class LighteningCounterDisplay extends React.Component{
    render(){
        let divStyle = {
            width: 250,
            textAlign: "center",
            backgroundColor: "black",
            padding: 40,
            fontFamily: "sans-serif",
            color: "#999",
            borderRadius: 10
        };

        return(
            <div style={divStyle}>
                <LighteningCounter />
            </div>
        )
    }
}

export default LighteningCounterDisplay;