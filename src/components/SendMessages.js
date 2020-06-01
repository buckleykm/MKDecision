import React, { Component } from 'react';

class Contact extends Component {
 constructor(props) {
    super(props);
    this.state = {
    message: '',
    email: ''
    };
  }

handleSubmit(e) {
    e.preventDefault();
  /*global fetch */
    fetch('https://d4k5hdtlv4.execute-api.us-east-1.amazonaws.com/prod/message',{
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
        (response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
        alert("Message Sent."); 
        this.resetForm();
      }else if(response.status === 'fail'){
        alert("Message failed to send.");
      }
    });
  }

  onEmailChange(event) {
    this.setState({email: event.target.value});
  }

  onMessageChange(event) {
    this.setState({message: event.target.value});
  }


  render() {
    return (
      <div className="container mt-5">
      <h3>Contact</h3>
      <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    <div className="form-group mt-4">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
    </div>
    <br />
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
      </div>
    );
  }
}

  export default Contact;