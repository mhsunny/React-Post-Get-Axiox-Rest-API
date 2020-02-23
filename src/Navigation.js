import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Notfound from "./Notfound";
import {NavLink, Link, Router, Route, Switch, BrowserRouter} from 'react-router-dom';
// import NavLink from "react-bootstrap/NavLink";
import Products from "./Products";
import Brands from "./Brands";
import Home from "./Home"
import Login from "./Login";
import Profile from "./Profile";
const history = require("history");


class Navigation extends Component {
    render() {
        return (
            <div>
                <Router history={history.createBrowserHistory()}>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand to="/">T-Shop</Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavLink className="p-4" exact activeStyle={{ color:'red' }} to="/">Home</NavLink>
                        <NavLink className="p-4" exact activeStyle={{ color:'red' }} to="/brands">Brands</NavLink>
                        <NavLink  className="p-4" exact activeStyle={{ color:'red' }}  to="/products/men">Men</NavLink>
                        <NavLink className="p-4" exact activeStyle={{ color:'red' }}  to="/products/women">Women</NavLink>
                        <NavLink className="p-4" exact activeStyle={{ color:'red' }}  to="/products/teen">Teen</NavLink>
                        <NavLink className="p-4" exact activeStyle={{ color:'red' }} to="/products/kid">Kid</NavLink>
                        <NavLink className="p-4" exact activeStyle={{ color:'red' }} to="/login">Login</NavLink>
                        <NavLink className="p-4" exact activeStyle={{ color:'red' }} to="/profile">My Profile</NavLink>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>

                <Switch>
                    <Route exact   path="/"  component={Home} />
                    <Route exact   path="/brands/" component={Brands} />
                     <Route exact   path="/products/:name" component={Products} />
                    <Route exact   path="/products/:name" component={Products} />
                    <Route exact   path="/products/:name" component={Products} />
                    <Route exact  path="/products/:name" component={Products} />
                    <Route exact  path="/login" component={Login} />
                    <Route exact  path="/profile" component={Profile} />
                     <Route  component={Notfound} />

                </Switch>
            </Router>


            </div>
        );
    }
}

export default Navigation;