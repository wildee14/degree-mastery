import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import HeaderImage from "./HeaderImage";
import Sidebar from "./Sidebar";
import BlogTable from "./BlogTable";
import Footer from "./Footer";

import axios from "axios";

class BlogDirectory extends Component {
  state = {
    blogs: []
  };

  componentDidMount() {
    var params = this.props.location.pathname.replace("/blogs/", "");
    if (params.includes("/")) {
      var fetchUrl ="/api/testblogs";
    } else {
      var fetchUrl ="/api/testblogs/" + params;
    }

    axios.get(fetchUrl)
      .then(function(res){return res.data;})
      .then(resjson =>
          this.setState({
            blogs: resjson.blogs
          })
        );

  }

  // testImage1 =
  //   "https://images.unsplash.com/photo-1534009916851-7850ba974f9c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dccb7f58b57f6c01c25fb9cc9fd3163e&auto=format&fit=crop";

  render() {
    return (
      <div>
        <Header />
        <HeaderImage />
        <div className="row background">
          <div className="col xl12 l12 m12 s12">
            <div className="App">
              <div>
                <h1 className="center posts">
                  <strong>Blog Directory</strong>
                </h1>
                <div>
                  <BlogTable blogs={this.state.blogs} />
                </div>
              </div>
            </div>
          </div>
          <div className="col xl8 offset-xl2 l8 offset-l2 m10 offset-m1 s12">
            <Sidebar  />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BlogDirectory;
