import React from "react";
import { Link, NavLink } from "next/link";

const TopicSnippet = (props) => {
  return (
    <div className="card-flexier">
      <div className="card hoverable" >
        <div className="card-image">
          <Link to={"/topic/" + (props.shortTitle)}><span></span></Link>
          <img src={props.image} />
          <span className="card-title topic-card topic-text">{props.title}</span>
        </div>
      </div>
    </div>
  );
}

export default TopicSnippet;
