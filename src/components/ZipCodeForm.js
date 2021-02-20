import React from 'react';
import Form from 'react-bootstrap/Form';


class ZipCodeForm extends React.Component {

  state = {
    formChecked: false
  }

  handleChange = event => {
    console.log("in handle change for switch")
    //console.log(event.target.checked)
      this.setState({
        formChecked: event.target.checked
      })
    
  }

  renderZipForm = () => {
    if (this.state.formChecked === true){
      return(
       //either move form at bottom or take away form here
        <form>
          <label>Enter ZipCode: </label>
            <input type="text"   name="zipcode" placeholder="function not complete"/>
        </form>
       
      )
    }

  }


    render(){
        return(
        <Form>
          <Form.Check 
            type="switch"
            id="custom-switch"
            label="Check this switch"
            onChange={this.handleChange}
          />

          {this.renderZipForm()}

        </Form>
        )
    }
}

export default ZipCodeForm