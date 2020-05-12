import React from "react";
import Link from "next/link";
import moment from "moment";
const BlogPostSnippySnippet = props => {
  // if (props.blog.tags) {
  //   var categories = (
  //     <td>
  //       {props.blog.tags.split(",").map((category, index) => (
  //         <Link key={category}  href={"/blogs/" + category}>
  //           <a className="category">
  //             {category}
  //             {index < category.length ? "," : ""}
  //           </a>
  //         </Link>
  //       ))}
  //     </td>
  //   );
  // } else {
  var categories = <td />;
  // }
  console.log("props");
  console.log(props.blog);
  return (
    <tr>
      <td>
        {/* <Link
          href={"/blog/" + props.blog.url}
        > */}
        <a>{props.blog.title}</a>
        {/* </Link> */}
      </td>
      <td>{moment(props.blog.date).calendar()}</td>
      {categories}
      <td className="snippet">{props.blog.snippet.substring(0, 50)}..</td>
    </tr>
  );
};

export default BlogPostSnippySnippet;
