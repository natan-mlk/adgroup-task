import React, {Component} from 'react';
import {Col} from 'react-bootstrap';

class Imagebox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            imgStyle: {opacity: '0'},
            svgClassName: '',
            loaderStyle: {opacity: '1'},
            overlayStyle: {opacity: '0'}
        };
    }

    handleImageLoaded() {
        setTimeout(() => this.setState({imgStyle: {opacity: '1'}}), 500);
        this.setState({svgClassName: 'animated'});
        this.setState({loaderStyle: {opacity: '0'}});
        this.setState({overlayStyle: {opacity: '1'}});
    }

    render() {
        return (
            <Col xs={12} sm={6} md={4} className="image-box-2">
                <div className="image-box-2__wrapper"
                     onClick={() => this.props.handleClick()}>

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
                        <svg height="3px" width="80px"
                             xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="0" x2="80" y2="0"/>
                        </svg>
                    </div>

                    <div className="image-box-2__overlay" style={this.state.overlayStyle}>
                        <div className="image-box-2__overlay__color-box">
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