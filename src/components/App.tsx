import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";
import { simulateFail } from "../util";
import Button from "./Button";
import Rates from "./Rates";

const GET_ACTIVE = gql`
  {
    active @client
  }
`;

const App = () => (
  <div>
    <h1>Currency Exchange Rates</h1>
    <main>
      <p>
        <label>
          <input
            type="checkbox"
            onChange={simulateFail}
            defaultChecked={false}
          />
          Simulate network failure
        </label>
      </p>
      <Query query={GET_ACTIVE}>
        {({ data, client }) => {
          if (data.active) {
            return <Rates />;
          }
          return (
            <p>
              <Button
                text="Load"
                onClick={() => client.writeData({ data: { active: true } })}
              />
            </p>
          );
        }}
      </Query>
    </main>
  </div>
);

export default App;
