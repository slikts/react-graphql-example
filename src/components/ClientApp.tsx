import React from "react";
import { ApolloProvider } from "react-apollo";
import client from "../client";
import App from "./App";

const ClientApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default ClientApp;
