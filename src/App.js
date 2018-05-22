import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './navigation'
import Gallery1 from './galleries/gallery1'
// import Gallery2 from './galleries/gallery2'
// import Gallery3 from './galleries/gallery3'

import './styles/App.css';

const App = () => {

    return (
        <Router>
            <div className="App">
                <Navigation/>

                <div className="content">
                    <Route exact path="/" component={Gallery1}/>
                    {/*<Route path="/gallery2" component={Gallery2}/>*/}
                    {/*<Route path="/gallery3" component={Gallery3}/>*/}
                </div>
            </div>
        </Router>
    );
}

export default App;
