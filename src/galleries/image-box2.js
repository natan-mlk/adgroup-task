import React, {Component} from 'react';
import {Col} from 'react-bootstrap';

class Imagebox extends Component {

    render() {
        return (
            <Col xs={6} md={4} className="image-box2">
                <div className="wrapper">
                    <img src={this.props.source}
                         className="gallery-image2"/>

                    <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <rect className="shape" height="100%" width="100%"/>
                    </svg>
                </div>
            </Col>
        );
    }
}

export default Imagebox;