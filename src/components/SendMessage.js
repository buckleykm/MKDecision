import React from 'react';
import axios from 'axios';
import logo from '../images/MKAnimation.gif'
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      buttontext: 'Send'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }
  changeText = (buttontext) => {

    this.setState({ buttontext }); 
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { name, email, message } = this.state;
    await axios.post(
      'https://d4k5hdtlv4.execute-api.us-east-1.amazonaws.com/prod/message',
      { key1: `${email}`,
        key2: `${name}`,
        key3: `${message}`}
    )
    this.setState({text: 'Send'})
    ;
  }

  
  render() {
    const { buttontext } = this.state
    return (
      <div>
        <ValidatorForm onSubmit={this.handleSubmit}>
         <br />
          <br />
          <br />
          <img src={logo} alt="Logo" />  
          <br />        
          Welcome to the MK Decison Messenger
          <br />
          <TextValidator
            label = "Name"   
            name="name"
            validators={['required']}
            errorMessages={['this field is required']}
            onChange={this.handleChange}
            value={this.state.name}
          />
          <br />
          <br />
          <TextValidator
            label = "Email"
            name="email"
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
            onChange={this.handleChange}
            value={this.state.email}
          />
          <br />
          <br />
          <TextValidator
            label = "Message"   
            name="message"
            validators={['required']}
            errorMessages={['this field is required']}
            onChange={this.handleChange}
            value={this.state.message}
          />  
          <br />
          <br />
          < Button 
          type="submit"
          onClick={ () => { this.changeText("Thanks for sending a message!")}  }> {buttontext} </Button>
        </ValidatorForm>
      </div>
    );
  }
}