import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
 import CardColumns from "react-bootstrap/CardColumns";
import MainSlider from "./MainSlider";
import ChangeState from "./ChangeState";
class Products extends Component {

    constructor({match}) {
        super();
        this.state = {
            productName: match.params.name,
        }
    }

    render() {
        return (
            <div>
                <h1 className='text-uppercase'>{this.state.productName}</h1>

                <MainSlider name={this.state.productName} />
                <ChangeState/>
                <CardColumns>
                    <Card>
                        <Card.Img variant="top" src="https://picture-cdn.wheretoget.it/sjy0d8-l-610x610-t+shirt-quote+shirt-funny+quote-funny+shirt-tee-women+tshirts-women+shirts-gray+shirt-grey-short+sleeve+tee-cute+shirt-v+neck-tumblr+tshirt.jpg" />
                        <Card.Body>
                            <Card.Title>Card title that wraps to a new line</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="p-3">
                        <blockquote className="blockquote mb-0 card-body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.
                            </p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://cdn-img-0.wanelo.com/p/012/fdc/624/1047b761491d711cb8f01b5/x354-q80.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://media.customon.com/unsafe/600x600/img.customon.com/img/34636439/109853,18,2,0,62,184,200.35440180587,23,0,0a28cc54169922aa8a32acebc84b8ab7/merchantimagenew/mitch-hedberg-t-women-s-t-shirt-white.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://media.kidozi.com/unsafe/600x600/img.kidozi.com/img/113956/551,14,2,0,62,156.00,206.00,36.00,10.00,1445449582-savehorse/merchantimagenew/save-a-horse-ride-a-cowboy-unisex-t-shirts-white.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://srv.latostadora.com/designall.dll/evolution_figure_skating--i:1356231172773013562397;b:f8f8f8;s:M_L7;f:f;k:e1744e69e5b852c8f35c44f9e4673d27;p:1.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://images.hellogiggles.com/uploads/2017/11/20090807/gap.png" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/2039/5759/products/wbt-scorpiozodiac-model-w-fc_large.jpg?v=1574188967" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card bg="primary" text="white" className="text-center p-3">
                        <blockquote className="blockquote mb-0 card-body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.
                            </p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </Card>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img src="https://rlv.zcache.com/twerk_or_treat_cute_dancers_halloween_tank_top-rb8f79530ea1e488faf8eed9e9bce1b33_znpmt_540.jpg" />
                    </Card>
                    <Card className="text-right">
                        <blockquote className="blockquote mb-0 card-body">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.
                            </p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </div>
        );
    }
}

export default Products;