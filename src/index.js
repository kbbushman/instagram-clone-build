import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";
import App from "./App";
import AuthProvider from './auth';
import client from './graphql/client';

ReactDOM.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <App />
        </Router>
      </MuiThemeProvider>
    </ApolloProvider>
  </AuthProvider>,
  document.getElementById("root")
);
