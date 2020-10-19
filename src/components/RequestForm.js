import React from 'react';
import {connect} from 'react-redux';
import {createRequest} from '../actions/listingsActions'

import Button from 'react-bootstrap/Button'

 
class RequestForm extends React.Component {

  


state = {
    //item: this.props.listingToEdit ? this.props.listingToEdit.attributes.item : "",
    name: "",
    phone: "",
    message:"",
  }
 
 
// baseState = this.state

//seller_id: this.props.userID,
  
 
  handleInputChange = event => {
    const {name, value} = event.target
    // const loginFormInfo = {
    //     ...props.loginForm,
    //     [name]: value
    // }
    this.setState({
        ...this.state,
        [name]: value
    })
    //props.fillLoginForm(loginFormInfo)
    //console.log(this.state)
    }


    // handleSubmit = event => {
    //     event.preventDefault()
    //     console.log("made it to handle submit!")
    //     this.props.createListing({...this.state, seller_id: this.props.userID,}, this.props.history)
    //     this.setState(this.initialState)
    // }


 
  render() {
    return (
        <div>
        This is the Request form!

        {console.log("props of reqeust from", this.props)}
        
    
      <form onSubmit={event => {
          event.preventDefault()
          //this.props.handleSubmit(this.state, this.props.userID)
          console.log("inside handle requestform")
          //might need history
          this.props.createRequest({...this.state, buyer_id: this.props.currentUser.id, listing_id: this.props.listing.id}, this.props.history)
      }}>

          

        <label>Full Name</label>
            <input type="text" onChange={event => this.handleInputChange(event)} value={this.state.name} name="name"/>
        <label>Phone Number to Contact</label>
            <input type="text" onChange={event => this.handleInputChange(event)} value={this.state.phone} name="phone" />
        <label>Message to Seller</label>
            <input type="text" onChange={event => this.handleInputChange(event)} value={this.state.message} name="message"/>
        
        
        <Button variant="info" type="submit">Send Request </Button> 
      </form>

      {console.log(this.state)}
      

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