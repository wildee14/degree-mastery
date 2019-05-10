import React, { Component } from "react";
import moment from "moment";
import NotFoundPage from "./NotFoundPage";
import Header from "./Header";
import HeaderImage from "./HeaderImage";
import Footer from "./Footer";
import axios from "axios";

class BlogPageDirectory extends Component {
  state = { blog: [] };
  componentDidMount() {
    axios.get(
      "/api/testblog/" +
        this.props.location.pathname.replace("/blog/", "")
    )
      .then(res => res.data)
      .then(resjson =>
        this.setState({
          blog: resjson.blog
        })
      );
  }

  render() {
    if (!this.state.blog || this.state.blog.length == 0) {return  (<NotFoundPage />);}
    else
    {
      let vidLink, podLink;
      if (!!this.state.blog.vid) {
        vidLink = (
          <div className="row">
            <div className="col m3" />
            <div className="col m6">
              <div className="video-container">
                <iframe
                  width="400"
                  height="200"
                  src={this.state.blog.vid}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="col m3" />
          </div>
        );
      } else {
        vidLink = <div />;
      }
      if (!!this.state.blog.pod) {
        podLink = (
          <a href={this.state.blog.pod} type="audio/mp3">
            Podcast Link
          </a>
        );
      } else {
        podLink = <div />;
      }
      var HtmlToReactParser = require('html-to-react').Parser;
      var htmlToReactParser = new HtmlToReactParser();
      var reactElement = htmlToReactParser.parse(this.state.blog.body);
      
      return (
        <div>
          <Header />
          <HeaderImage />
          <div className="center">
            <div key={this.state.blog.url}>
              <h1>
                <strong className="bolder-font">{this.state.blog.title}</strong>
              </h1>
              <p className="author">
                Author: {this.state.blog.lastName},{this.state.blog.firstName}
                <br />
                {moment(this.state.blog.date).fromNow()}
                <br />
                {this.state.blog.tags}
              </p>
              {vidLink}
              {podLink}
              <div className="blogText">{reactElement}</div>
            </div>
            <Footer />
          </div>
        </div>
      );
    }
  }
}

export default BlogPageDirectory;
