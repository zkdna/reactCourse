import React from "react";
import Notification from "./Notification";
import "./Notification.css";

class NotificationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  nextItemId = 0;
  kind = ["success", "failed", "info"];

  makeItem() {
    return {
      id: this.nextItemId++,
      kind: this.kind[0],
      text: Math.random(),
      container: "ui segment"
    };
  }

  addItem = () => {
    this.setState({ items: [...this.state.items, this.makeItem()] });
  };

  renderNotification() {
    return <Notification items={this.state.items} />;
  }

  render() {
    console.log(this.state.items);
    return (
      <div>
        <button onClick={this.addItem} className="ui secondary button">
          Add item
        </button>
        <div className="wrapper">{this.renderNotification()}</div>
      </div>
    );
  }
}

export default NotificationContainer;
