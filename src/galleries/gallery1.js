import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import Imagebox from './image-box';
import IMAGES from './all-images'

class Gallery1 extends Component {

    constructor(props) {
        super(props);

        const gallery1Images = IMAGES.filter(function (item) {
            return item.cat === "people";
        });

        this.state = {
            allImages: gallery1Images
        };
    }

    render() {
        return (
            <Grid>
                <Row>
                    {this.state.allImages.map((item, index) => {
                        return (
                            <Imagebox source={item.src} key={index} caption={item.caption}>
                            </Imagebox>
                        )
                    })}
                </Row>
            </Grid>
        )
    }
}

export default Gallery1