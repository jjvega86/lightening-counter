import React from 'react';

class LighteningCounter extends React.Component{
    render(){
        let headerStyle = {
            textAlign: "center",
            color: "white"
        }

        return(
            <h1 style={headerStyle}>Hello!</h1>
        );
    }
}

export default LighteningCounter;