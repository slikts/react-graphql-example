import React from "react";
import { style } from "typestyle";
import { Rate, RatePayload } from "../types";

const RatesTable = ({
  payload: {
    data: { rates, base, date },
  },
}: {
  payload: RatePayload;
}) => (
  <table>
    <caption
      className={style({
        whiteSpace: `nowrap`,
      })}
    >
      <span>{base}</span> <span>{date}</span>
    </caption>
    <thead>
      <tr>
        <th>Code</th>
        <th>Rate</th>
      </tr>
    </thead>
    <tbody>
      {rates.map(({ code, rate }: Rate) => (
        <tr key={code}>
          <td>{code}</td>
          <td>{rate}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default RatesTable;
