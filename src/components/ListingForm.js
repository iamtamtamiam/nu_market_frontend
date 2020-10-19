import React from 'react';
import {connect} from 'react-redux';
import {createListing} from '../actions/listingsActions'

import Button from 'react-bootstrap/Button'
 
class ListingForm extends React.Component {

  componentDidMount(){
    if (this.props.editMode){
        this.setState({
            ...this.state,
            ...this.props.listingToEdit.attributes
        })
    }

  }  


state = {
    item: "",
    price: "",
    description:"",
    condition: "",
    contact:"",
    zipcode:"",
  }
 
 
  
 
  handleInputChange = event => {
    const {name, value} = event.target
    
    this.setState({
        ...this.state,
        [name]: value
    })
    
    }



    valueType = () => {
        if (this.props.editMode){
            return this.props.listingToEdit.attributes
        }
        else{ return this.state}
    }


 
  render() {

    

    return (
        <div>
        Add a New Listing!
        
        
      <form onSubmit={event => {
          event.preventDefault()
          this.props.handleSubmit(this.state, this.props.userID)
      }}>

          {console.log(this.valueType())}

        <label>Item</label>
            <input type="text" onChange={event => this.handleInputChange(event)} defaultValue={this.valueType().item} name="item"/>
        <br></br>
        <label>Price</label>
            <input type="text" onChange={event => this.handleInputChange(event)} defaultValue={this.valueType().price} name="price" />
            <br></br>
        <label>Description</label>
            <input type="text" onChange={event => this.handleInputChange(event)} defaultValue={this.valueType().description} name="description"/>
            <br></br>
        <label>Condition</label>
            <input type="text" onChange={event => this.handleInputChange(event)} defaultValue={this.valueType().condition} name="condition"/>
            <br></br>
        <label>Contact</label>
            <input type="text" onChange={event => this.handleInputChange(event)} defaultValue={this.valueType().contact} name="contact"/> 
            <br></br>
        <label>Zipcode</label>
            <input type="text" onChange={event => this.handleInputChange(event)} defaultValue={this.valueType().zipcode} name="zipcode"/>

            <br></br>

        
        <Button variant="info" type="submit">{this.props.editMode ? "Update This Listing" : "Create New Listing!"} </Button> 
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



 
export default connect(mapStateToProps, {createListing})(ListingForm);