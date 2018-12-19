import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { RestLink } from "apollo-link-rest";
import { withClientState } from "apollo-link-state";

const cache = new InMemoryCache();
const stateLink = withClientState({
  cache,
  defaults: {
    active: false,
  },
  resolvers: {},
});
const restLink = new RestLink({
  typePatcher: {
    RatePayload: (data: any): any => {
      if (data.rates != null) {
        data.rates = Object.entries(data.rates).map(([code, rate]) => ({
          __typename: "Rate",
          code,
          rate,
        }));
      }
      return data;
    },
  },
  uri: "https://api.exchangeratesapi.io/",
});
const link = ApolloLink.from([stateLink, restLink]);
const client = new ApolloClient({ cache, link });

export default client;
