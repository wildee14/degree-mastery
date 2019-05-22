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
    blogs: [],
    categories: []
  };

  componentDidMount() {
    var params = this.props.location.pathname.replace("/blogs/", "");
    if (params.includes("/")) {
      var fetchUrl = "/api/testblogs";
    } else {
      var fetchUrl = "/api/testblogs/" + params;
    }

    axios.get(fetchUrl)
      .then(function(res){return res.data;})
      .then(resjson =>
          this.setState({
            blogs: resjson.blogs
          })
        );

    axios.get("/api/categories")
      .then(function(res){return res.data;})
      .then(resjson =>
        this.setState({
          categories: resjson
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
          <div className="col xl9 l9 m10 s10">
            <div className="App">
              <div>
                <h1 className="center posts">
                  <strong>Blog Directory</strong>
                </h1>
                <div className="box">
                  <BlogTable blogs={this.state.blogs} />
                </div>
              </div>
            </div>
          </div>
          <div className="col xl3 l3 m2 s2">
            <Sidebar categories={this.state.categories} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BlogDirectory;
