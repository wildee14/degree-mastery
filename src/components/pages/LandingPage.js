import React, { Component } from "react";
import BlogPostSnippet from "../blog/BlogPostSnippet";
import Header from "../header/Header";
import HeaderImage from "../header/HeaderImage";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import axios from "axios";

class LandingPage extends Component {
  state = {
    blogs: [],
  };

  componentDidMount() {
    var params = this.props.location.pathname.replace("/blogs/", "");
    if (params.includes("/")) {
      var fetchUrl ="/api/testblogs";
    } else {
      var fetchUrl ="/api/testblogs/" + params;
    }
    axios.get(fetchUrl)
      .then(res => res.data)
      .then(resjson =>
        this.setState({
          blogs: resjson.blogs
        })
      );
  }

  render() {
    return (
      <div>
        <Header />
        <HeaderImage />
        <div className="row background">
          <div className="col xl9 l9 m12 s12">
            <div className="App">
              <div>
                <h1 className="center posts">
                  <strong>Early Grad Syllabus</strong>
                </h1>
              </div>
              <div className="box">
                {this.state.blogs
                  .sort((a,b) => new Date(b.date) - new Date(a.date))
                  .map(blog => (
                    <BlogPostSnippet
                      key={blog.url}
                      blog={blog}
                    />
                  ))
                }
              </div>
            </div>
          </div>
          <div className="col xl3 l3 m12 s12">
            <Sidebar />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
