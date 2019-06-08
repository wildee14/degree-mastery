import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import moment from "moment";

class TopicSnippet extends React.Component {
  render() {
    let styles = {
      margin: `5%`
    }

    return (
      <div className="card-flexier">
        <div className="card hoverable" style={styles}>
          <div className="card-image">
            <a  href={"/topic/" + (this.props.title.replace(/ /g, "-"))}><span></span></a>
            <img src="/images/budgeting.jpeg" />
            <span className="card-title topic-card">{this.props.title}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TopicSnippet;
