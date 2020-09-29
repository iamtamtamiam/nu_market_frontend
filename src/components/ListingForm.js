import React from 'react';
 
class ListingForm extends React.Component {
  state = {
    item: "",
    price: "",
    description:"",
    condition: "",
    contact:""
  }
 
  
 
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

handleSubmit = event => {
    event.preventDefault()
    console.log("made it to handle submit!")

}

 
  render() {
    return (
        <div>
        This is the Listing form!
    
      <form onSubmit={this.handleSubmit}>

        <label>Item</label>
            <input type="text" onChange={event => this.handleInputChange(event)} value={this.state.item} name="item"/>
        <label>Price</label>
            <input type="text" onChange={event => this.handleInputChange(event)} value={this.state.price} name="price" />
        <label>Description</label>
            <input type="text" onChange={event => this.handleInputChange(event)} value={this.state.description} name="description"/>
        <label>Condition - may want to change!!</label>
            <input type="text" onChange={event => this.handleInputChange(event)} value={this.state.condition} name="condition"/>
        <label>Contact - may want to remove!!</label>
            <input type="text" onChange={event => this.handleInputChange(event)} value={this.state.contact} name="contact"/> 

        <input type="submit" value="Create New Listing!"></input> 
      </form>

      {console.log(this.state)}

      </div>
    )
  }
}
 
export default ListingForm;