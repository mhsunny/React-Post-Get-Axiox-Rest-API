import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PutiConsumer} from "./Mycontext";

class Profile extends Component {

    render() {

        if(sessionStorage.getItem('userName') == null){
            return   <Redirect to="/login" />
        }else{
            return (
                <div>
                    <p>Logout</p>
                    <PutiConsumer>
                        {
                              discount =>{
                                return discount;
                            }
                        }
                    </PutiConsumer>

                </div>
            );
        }

    }
}

export default Profile;