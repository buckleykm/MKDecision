import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import SendMessage from './components/SendMessage';
import { withAuthenticator } from '@aws-amplify/ui-react';
Amplify.configure(aws_exports);

function App() {
  return (
    <div className="App">
     <SendMessage />
    </div>
  );
}

export default withAuthenticator(App, true);
