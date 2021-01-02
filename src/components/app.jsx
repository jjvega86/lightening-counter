import React from 'react';
import './app.css';
import LightningCounterDisplay from './LightningCounterDisplay/lightningCounterDisplay';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className="container-fluid">
                <LightningCounterDisplay />
            </div>
        )
    }
}

export default App;