import React from "react";
import Link from "next/link";
import moment from "moment";

function BlogPostSnippet(props) {
  if (props.blog.tags) {
    var categories = (
      <div>
        Tags:
        {props.blog.tags.split(",").map((category, index) => (
          <Link key={category} href={"/blogs/" + category}>
            <a className="category">
              {category}
              {index < category.length ? "," : ""}
            </a>
          </Link>
        ))}
      </div>
    );
  } else {
    var categories = <div />;
  }
  let styles = {
    margin: `5%`
  };
  return (
    <div className="card-flex">
      <div className="card hoverable" style={styles}>
        <div className="card-content">
          <h1 className="card-title">
            <strong className="bolder-font">{props.blog.title}</strong>
          </h1>
          <p className="author">
            {props.blog.author.LastName},{props.blog.author.FirstName}
            &nbsp; &nbsp;| &nbsp;&nbsp;
            {moment(props.blog.date).calendar()}
          </p>
          <div className="tags">{categories}</div>
          <p className="snippet">
            {props.blog.snippet}.....
            <br />
            <Link href={`/blog/${props.blog.url}`}>
              <a>[Read More]</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogPostSnippet;
