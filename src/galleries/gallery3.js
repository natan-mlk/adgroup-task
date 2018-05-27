import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import Imagebox3 from './image-box3';
import Lightbox from 'react-images';
import IMAGES from './all-images'

class Gallery3 extends Component {

    constructor(props) {
        super(props);

        const gallery1Images = IMAGES.filter(function (item) {
            return item.cat === "arch";
        });

        this.state = {
            allImages: gallery1Images,
            currentImage: 0,
            isOpen: false,
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
                    <Row style={this.state.style}>
                        {this.state.allImages.map((item, index) => {
                            return (
                                <Imagebox3 source={item.src} key={index} caption={item.caption}
                                           handleClick={() => this.openLightbox(index)}>
                                </Imagebox3>
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

export default Gallery3