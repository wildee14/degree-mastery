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
            <Link to={"/topic/" + (this.props.shortTitle)}><span></span></Link>
            <img src={this.props.image} />
            <span className="card-title topic-card topic-text">{this.props.title}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TopicSnippet;
