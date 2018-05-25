import React, {Component} from 'react';
import {Col} from 'react-bootstrap';

class Imagebox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            imgStyle: {opacity : '0'},
            svgClassName: '',
            loaderStyle : {opacity : '1'}
        };
    }

    handleImageLoaded() {
        setTimeout(() => this.setState({imgStyle: {opacity : '1'}}), 500);
        this.setState({svgClassName: 'animated'});
        this.setState({loaderStyle : {opacity : '0'}});
    }

    render() {
        return (
            <Col xs={6} md={4} className="image-box-2">
                <div className="image-box-2__wrapper">

                    <img onLoad={() => this.handleImageLoaded()}
                         src={this.props.source}
                         className="image-box-2__image"
                         style={this.state.imgStyle}/>

                    <svg className="image-box-2__svg"
                         height="100%" width="100%"
                         xmlns="http://www.w3.org/2000/svg">
                        <rect className={this.state.svgClassName + " shape"}
                              height="100%" width="100%"/>
                    </svg>

                    <div className="image-box-2__loader" style={this.state.loaderStyle}>

                    </div>
                </div>
            </Col>
        );
    }
}

export default Imagebox;