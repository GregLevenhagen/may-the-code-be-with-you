import React from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { RestLink } from "apollo-link-rest";
import Home from "./components/Home";

const restLink = new RestLink({
  uri: process.env.REACT_APP_STAR_WARS_API_URL
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);

export default App;
