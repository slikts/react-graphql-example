import { NetworkStatus } from "apollo-client";
import { addDays } from "date-fns";
import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";
import { isoDate } from "../util";
import Button from "./Button";
import Error from "./Error";
import Loading from "./Loading";
import RatesTable from "./RatesTable";

const GET_LATEST = gql`
  query Latest($date: String = "latest") {
    data(date: $date) @rest(type: "RatePayload", path: "{args.date}") {
      date
      base
      rates
    }
  }
`;

const Rates = () => (
  <Query
    query={GET_LATEST}
    variables={{
      date: "latest",
    }}
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
            <Button
              text="Previous"
              onClick={() =>
                refetch({ date: isoDate(addDays(new Date(data.data.date), -1)) })
              }
            />
            <Button
              text="Next"
              onClick={() =>
                refetch({ date: isoDate(addDays(new Date(data.data.date), 1)) })
              }
            />
            <Button text="Refresh" onClick={() => refetch()} />
          </p>
          <RatesTable payload={data} />
        </div>
      );
    }}
  </Query>
);

export default Rates;
