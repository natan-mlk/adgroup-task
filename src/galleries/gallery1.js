import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import Imagebox from './image-box';
import Lightbox from 'react-images';
import IMAGES from './all-images'

class Gallery1 extends Component {

    constructor(props) {
        super(props);

        const gallery1Images = IMAGES.filter(function (item) {
            return item.cat === "people";
        });

        this.state = {
            allImages: gallery1Images,
            currentImage: 0,
            isOpen: false
        };
    }

    openLightbox(myIndex) {
        this.setState({
            isOpen: true,
            currentImage: myIndex
        });
    }

    onClose() {
        this.setState({isOpen: false});
    }

    gotoNext() {
        this.setState({currentImage: this.state.currentImage + 1});
    }

    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        {this.state.allImages.map((item, index) => {
                            return (
                                <Imagebox source={item.src} key={index} caption={item.caption}
                                          handleClick={() => this.openLightbox(index)}>
                                </Imagebox>
                            )
                        })}
                    </Row>
                </Grid>

                <Lightbox
                    images={this.state.allImages}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.isOpen}
                    onClose={() => this.onClose()}
                    onClickPrev={() => this.gotoPrevious()}
                    onClickNext={() => this.gotoNext()}
                    backdropClosesModal={true}
                    width={1200}
                />
            </div>
        )
    }
}

export default Gallery1