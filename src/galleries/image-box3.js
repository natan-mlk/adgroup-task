import React, {Component} from 'react';
import {Col} from 'react-bootstrap';

class Imagebox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            imgLoadedStyle: '',
            loaderStyle: {display: 'block'},
            overlayStyle: {opacity: '0'}
        };
    }

    handleImageLoaded() {
        this.setState({imgLoadedStyle: 'image-box-3__image--loaded'});
        this.setState({loaderStyle: {display: 'none'}});
        this.setState({overlayStyle: {opacity: '1'}});
    }

    render() {
        return (
            <Col xs={12} sm={6} md={4} className="image-box-3">
                <div className="image-box-3__wrapper">

                    <img onLoad={() => this.handleImageLoaded()}
                         src={this.props.source}
                         className={this.state.imgLoadedStyle + " image-box-3__image"}/>



                    <div className="image-box-3__loader" style={this.state.loaderStyle}>
                        <svg height="100%" width="100%"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect className="image-box-3__loader__shape"
                                  height="100%" width="100%"/>
                        </svg>
                    </div>

                    <div className="image-box-3__overlay" style={this.state.overlayStyle}>
                        <div className="image-box-3__overlay__color-box">
                        </div>

                        <p>{this.props.caption}</p>

                        <svg height="3px" width="200px"
                             xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="0" x2="200" y2="0"/>
                        </svg>
                    </div>
                </div>
            </Col>
        );
    }
}

export default Imagebox;