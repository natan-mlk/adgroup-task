import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import IMAGES from './all-images'

function imagesLoaded(parentNode) {
    const imgElements = [...parentNode.querySelectorAll("img")];
    for (const img of imgElements) {
        if (!img.complete) {
            return false;
        }
    }
    return true;
}

class Gallery3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    renderSpinner() {
        if (!this.state.loading) {
            // Render nothing if not loading
            return null;
        }
        return (
            <div>SPINNER</div>
        );
    }

    handleStateChange = () => {
        this.setState({
            loading: !imagesLoaded(this.galleryElement),
        });
    }



    render() {
        return (
            <Grid>
                <Row ref={element => { this.galleryElement = element; }}>
                    {this.renderSpinner()}

                    {IMAGES.map((item, index) => {
                        return (
                            <div className="image-box" >
                                <img src={item.src}
                                     key={index}
                                     onLoad={this.handleStateChange}
                                     onError={this.handleStateChange}
                                     className="gallery-image"/>
                            </div>
                        )
                    })}
                </Row>
            </Grid>
        )
    }

}

export default Gallery3