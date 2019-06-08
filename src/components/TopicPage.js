import React, { Component } from "react";
import BlogPostSnippet from "./BlogPostSnippet";
import Header from "./Header";
import HeaderImage from "./HeaderImage";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

class TopicPage extends Component {
  state = {
  };

  render() {
    return (
      <div>
        <Header />
        <HeaderImage />
        <div className="row background">
          <div className="col xl8 l8 m8 s8">
            <div className="App">
              <div>
                <h1 className="center posts">
                  <strong>Topic</strong>
                </h1>
              </div>
              <div className="box">
              </div>
            </div>
          </div>
            <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default TopicPage;
