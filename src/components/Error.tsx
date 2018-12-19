import React from "react";
import { style } from "typestyle";
import Dialog from "./Dialog";

interface Props {
  message: string;
  onDismiss: () => void;
  dismissLabel: string;
}

const Error = ({ message, onDismiss, dismissLabel }: Props) => (
  <Dialog {...{ onDismiss, dismissLabel }}>
    <p role="heading" className={style({
      marginTop: 0,
    })}>Error</p>
    <p>{message}</p>
  </Dialog>
);

export default Error;
