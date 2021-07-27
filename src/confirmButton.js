import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ConfirmButton extends Component {

  static propTypes = {
    action: PropTypes.func.isRequired,
    times: PropTypes.number
  };

  static defaultProps = {
    times: 3
  };

  state = {
    timesPressed: 0
  };

  onPress = () => {
    const { timesPressed } = this.state;
    const { action, times } = this.props;
    this.setState(
      {
        timesPressed: timesPressed + 1
      },
      () => {
        if (this.state.timesPressed === times) {
          action();
          this.setState({ timesPressed: 0 });
        }
      }
    );
  };

  render() {
    const { timesPressed } = this.state;
    const { dialog } = this.props;
    return (
      <button className="sure-button" level={timesPressed} onClick={this.onPress}>
        {dialog[timesPressed]}
      </button>
    );
  }
}
