import React from 'react';
import LightningCounter from '../LightningCounter/lighteningCounter';

class LightningCounterDisplay extends React.Component{
    render(){
        let commonStyle = {
            margin: 0,
            padding: 0
        }

        let divStyle = {
            width: 350,
            textAlign: "center",
            backgroundColor: "black",
            padding: 40,
            fontFamily: "sans-serif",
            color: "#999",
            borderRadius: 10
        };

        let textStyles = {
            emphasis: {
                fontSize: 38,
                paddingBottom: "15em",
                ...commonStyle /*Spread operator deconstructs object to this property*/
            },

            smallEmphasis:{
                ...commonStyle
            },

            small: {
                fontSize: 17,
                opacity: 0.5,
                ...commonStyle
            }
        };

        return(
            <div style={divStyle}> 
                <LightningCounter />
                <h2 style={textStyles.smallEmphasis}>LIGHTNING STRIKES</h2>
                <h2 style={textStyles.emphasis}>WORLDWIDE</h2>
                <p style={textStyles.small}>(since you loaded this example)</p>
            </div>
        )
    }
}

export default LightningCounterDisplay;