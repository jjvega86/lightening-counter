import React from 'react';
import './app.css';
import LighteningCounterDisplay from './LighteningCounterDisplay/lighteningCounterDisplay';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className="container-fluid">
                <LighteningCounterDisplay />
            </div>
        )
    }
}

export default App;