import React from 'react';
import {connect} from 'react-redux';
import {createPhoto} from '../actions/listingsActions'

import Button from 'react-bootstrap/Button'

 
class PhotoForm extends React.Component {


state = {
    //item: this.props.listingToEdit ? this.props.listingToEdit.attributes.item : "",
    url: "",
  }
 
 

 
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
        Add an image:

        {console.log("props of reqeust from", this.props)}
        
    
      <form onSubmit={event => {
          event.preventDefault()
          //this.props.handleSubmit(this.state, this.props.userID)
          console.log("inside handle photoform")
          //might need history
          this.props.createPhoto({...this.state, listing_id: this.props.listingId}, this.props.history)
      }}>

          

        <label>Image URL</label>
            <input type="text" onChange={event => this.handleInputChange(event)} value={this.state.url} name="url"/>
    
        
        <Button variant="info" type="submit">Add Photo</Button> 
      </form>

      {console.log(this.state)}
      

      </div>
    )
  }
}




 
export default connect(null, {createPhoto})(PhotoForm);