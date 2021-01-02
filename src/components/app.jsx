import React from 'react';
import './app.css';

class App extends React.Component{
    constructor(props){
        super(props);
        state = {}
    }

    render(){
        return(
            <div className="container">
                <h1>Hello World!</h1>
            </div>
        )
    }
}

export default App;