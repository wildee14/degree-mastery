import React, { Component } from "react";
import BlogPostSnippet from "./BlogPostSnippet";
import Header from "./Header";
import HeaderImage from "./HeaderImage";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import axios from "axios";

class TopicPage extends Component {
  state = {
    blogs: [],
    topic: ""
  };

  componentDidMount() {
    var topic = this.props.location.pathname.replace("/topic/", "");
    var fetchUrl ="/api/topic/" + topic;
    this.setState({topic: topic});
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
        <div className="row background">
          <div className="col xl9 l9 m10 s10">
            <div className="App">
              <div>
                <h1 className="center posts">
                  <strong>Blog Directory</strong>
                </h1>
                <div className="box">
                  {this.state.blogs
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
          </div>
          <div className="col xl3 l3 m2 s2">
            <Sidebar />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default TopicPage;
