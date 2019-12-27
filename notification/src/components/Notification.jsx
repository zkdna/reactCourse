import React from "react";
import "./Notification.css";

class Notification extends React.PureComponent {
  renderContent() {
    return this.props.items.map(item => (
      <div className={item.container}>
        <div className={item.kind}>
          <div key={item.id}>{item.text}</div>
        </div>
      </div>
    ));
  }

  render() {
    return <div className="content">{this.renderContent()}</div>;
  }
}

export default Notification;
