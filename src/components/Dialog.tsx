import React from "react";
import Button from "./Button";

interface Props {
  onDismiss: () => void;
  dismissLabel: string;
}

class Dialog extends React.Component<Props, { open: boolean }> {
  static defaultProps = {
    dismissLabel: "Close",
  };

  state = {
    open: true,
  };

  render() {
    return (
      <dialog open={this.state.open}>
        <div className="content">{this.props.children}</div>
        <footer>
          <Button onClick={this.close} text={this.props.dismissLabel} />
        </footer>
      </dialog>
    );
  }

  private close = (): void => {
    this.setState({ open: false });
    this.props.onDismiss();
  };
}

export default Dialog;
