import React, {Component} from 'react';
import {Col} from 'react-bootstrap';

class Imagebox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stateOpacity: {opacity : '1'},
            className: '',
            counter: 0,
            loaderStyle : {opacity : '1'}
        };
    }

    handleImageLoaded() {
        // setTimeout(() => this.setState({stateOpacity: {opacity : '1'}}), 800);
        this.setState({className: ''});
        this.setState({loaderStyle : {opacity : '0'}});
        this.setState({counter: this.state + 1});

    }

    render() {
        return (
            <Col xs={6} md={4} className="image-box2">
                <div className="wrapper">

                    <img onLoad={() => this.handleImageLoaded()}
                        src={this.props.source}
                         className={this.state.className + " gallery-image2"}
                         style={this.state.stateOpacity}
                         />

                    <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <rect className={this.state.className + " shape"}
                              height="100%"
                              width="100%"/>
                    </svg>

                    <div className="loader" style={this.state.loaderStyle}>

                    </div>
                </div>
            </Col>
        );
    }
}

export default Imagebox;