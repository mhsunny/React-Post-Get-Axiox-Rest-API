import React, {Component} from 'react';
import App from "./App";
import Post from "./Post";
import Mytable from "./Mytable";
import CountryList from "./CountryList";
import Profile from "./Profile";
import MainSlider from "./MainSlider";
// import Products from "./Products";


class Home extends Component {
    render() {
        return (
            <div>
                <MainSlider/>
                <Post/>
                <Mytable/>
                <CountryList />
            </div>
        );
    }
}

export default Home;