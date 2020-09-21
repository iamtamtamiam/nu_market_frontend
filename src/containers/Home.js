import React, {Component} from 'react';
import AllListings from './AllListings';

class Home extends Component {
    //all listings need to be refined into listing cards info


    render(){
        return (
            <div>
                <h1>Im HOME!</h1>
                    <AllListings/>

                <p>end of Home</p>
            </div>

        )

    }



}

export default (Home)