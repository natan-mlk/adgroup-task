import React, {Component} from 'react';
import {Col} from 'react-bootstrap';


window.onresize = function (event) {

};

class Imagebox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            imageBoxStyle: {width: '0'},
        };
    }

    handleImageLoaded(e) {
        const imgWidth = e.target.offsetWidth;
        this.setState({imageBoxStyle: {width: imgWidth + 'px'}});
    }

    render() {
        return (
            <div className="image-box-1"
                 style={this.state.imageBoxStyle}
                 onClick={() => this.props.handleClick()}>

                <img src={this.props.source}
                     onLoad={(e) => this.handleImageLoaded(e)}
                     className="image-box-1__image"/>

                <div className="image-box-1__overlay-1">
                </div>

                <div className="image-box-1__overlay-2">
                </div>

                <div className="image-box-1__caption">
                    <p>{this.props.caption}</p>
                </div>
            </div>
        );
    }
}

export default Imagebox;