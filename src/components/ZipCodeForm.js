import React from 'react';
import Form from 'react-bootstrap/Form';


class ZipCodeForm extends React.Component {




    render(){
        return(
        <Form>
          <Form.Check 
            type="switch"
            id="custom-switch"
            label="Check this switch"
          />
        </Form>
        )
    }
}

export default ZipCodeForm