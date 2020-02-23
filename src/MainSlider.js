import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'

class MainSlider extends Component {
    constructor(props) {
        super(props);
        this.state ={
            productName : this.props.name
        }
    }
    render() {
        console.log(this.state.productName);

        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.mymaldives.com.au/wp-content/uploads/sites/11/2016/12/Beach-Banner.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-uppercase'>{this.state.productName} T-Shirt</h3>
                            <p>Exclusive {this.state.productName} TShirt is.state.productName} e elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.mymaldives.com.au/wp-content/uploads/sites/11/2016/12/Beach-Banner.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.mymaldives.com.au/wp-content/uploads/sites/11/2016/12/Beach-Banner.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        );
    }
}

export default MainSlider;