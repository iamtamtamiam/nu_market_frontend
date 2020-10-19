import React from 'react';
import {connect} from 'react-redux';
import {createRequest} from '../actions/listingsActions'

import Button from 'react-bootstrap/Button'

 
class RequestForm extends React.Component {

  


state = {
    name: "",
    phone: "",
    message:"",
  }
 
 
baseState = this.state
  
 
  handleInputChange = event => {
    const {name, value} = event.target
   
    this.setState({
        ...this.state,
        [name]: value
    })
    
    }

    
    

 
  render() {
    return (
        <div>
        This is the Request form!

        
        
    
      <form onSubmit={event => {
          event.preventDefault()
          this.props.createRequest({...this.state, buyer_id: this.props.currentUser.id, listing_id: this.props.listing.id}, this.props.history)
          this.setState(this.baseState)
          console.log(this.state)
      }}>

          

        <label>Full Name</label>
            <input type="text" onChange={event => this.handleInputChange(event)} value={this.state.name} name="name"/>
        <label>Phone Number to Contact</label>
            <input type="text" onChange={event => this.handleInputChange(event)} value={this.state.phone} name="phone" />
        <label>Message to Seller</label>
            <input type="text" onChange={event => this.handleInputChange(event)} value={this.state.message} name="message"/>
        
        
        <Button variant="info" type="submit">Send Request </Button> 
      </form>

  
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        userID: state.currentUser.id
    }

}



 
export default connect(mapStateToProps, {createRequest})(RequestForm);