import React from "react";
import BlogPostSnippySnippet from "./BlogPostSnippySnippet";

const BlogTable = (props) => {
  var rows = props.blogs.map(blog => (
    <BlogPostSnippySnippet key={blog.url} blog={blog} />
  ));
  return (
    <div className="table">
      <table className="striped">
        <thead>
          <tr>
            <th width="30%">Post</th>
            <th width="10%">Date</th>
            <th width="20%">Tags</th>
            <th width="40%">Brief Snippet</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default BlogTable;
