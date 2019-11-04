import React from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { RestLink } from "apollo-link-rest";
import Home from "./components/Home";

// TODO: this should be in a proper wrapper class
const env = name => (window._env_ || process.env || {})[name];

const restLink = new RestLink({
  uri: env("STAR_WARS_API_URL")
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
