import React, {Component} from 'react';
import {Col} from 'react-bootstrap';

class Imagebox extends Component {

    render() {
        return (
            <Col sm={6} md={3} className="">
                <img src={this.props.source}
                     className="my-image"/>
            </Col>
        );
    }
}

export default Imagebox;