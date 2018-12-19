import { NetworkStatus } from "apollo-client";
import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";
import Button from "./Button";
import Error from "./Error";
import Loading from "./Loading";
import RatesTable from "./RatesTable";

const GET_LATEST = gql`
  {
    data @rest(type: "RatePayload", path: "latest") {
      date
      base
      rates
    }
  }
`;

const Rates = () => (
  <Query
    query={GET_LATEST}
    fetchPolicy="cache-and-network"
    notifyOnNetworkStatusChange
  >
    {({ loading, error, data, refetch, networkStatus }) => {
      if (loading || networkStatus === NetworkStatus.refetch) {
        return <Loading />;
      }
      if (error) {
        return (
          <Error
            onDismiss={refetch}
            dismissLabel="Retry"
            message={error.message}
          />
        );
      }
      return (
        <div>
          <p>
            <Button text="Refresh" onClick={() => refetch()} />
          </p>
          <RatesTable payload={data} />
        </div>
      );
    }}
  </Query>
);

export default Rates;
