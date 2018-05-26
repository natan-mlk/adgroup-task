import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import Imagebox2 from './image-box2';
import IMAGES from './all-images'

class Gallery3 extends Component {

    constructor(props) {
        super(props);

        const gallery1Images = IMAGES.filter(function (item) {
            return item.cat === "arch";
        });

        this.state = {
            allImages: gallery1Images,
        };
    }

    render() {
        return (
            <Grid>
                <Row style={this.state.style}>
                    {this.state.allImages.map((item, index) => {
                        return (
                            <Imagebox2 source={item.src} key={index} caption={item.caption}>
                            </Imagebox2>
                        )
                    })}
                </Row>
            </Grid>
        )
    }
}

export default Gallery3