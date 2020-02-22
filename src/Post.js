import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component {

    constructor() {
        super();
        this.state ={
            postData: "",
            postResult: " ",
        }
    }

    onChangeHandler =(event) =>{
        var mydata = event.target.value;
        this.setState({postData:mydata})
    }
    onClickHandler =()=>{
        axios.post('http://localhost/test.php', this.state.postData )
            .then(response =>{
                this.setState({postResult:response.data});
                //alert(this.state.postResult);

            })
            .catch(error=>{
                console.log(error);
                alert("Something went wrong");
            })
    }

    render() {
        return (
            <div>
                <p>{this.state.postResult}</p>

                <input type="text" onChange={this.onChangeHandler}  />
                <button onClick={this.onClickHandler}> Send </button>
            </div>
        );
    }
}

export default Post;