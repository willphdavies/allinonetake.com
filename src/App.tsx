import React from 'react';
import './App.scss';
import { AppRoutes } from './App.routes';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports);
interface AppProps {
  signOut?: () => void,
  user?: any,
}
function App(props: AppProps) {
  return (
    <AppRoutes />
  );
}

export default App;
