import React, { Component } from "react";
import moment from "moment";
import NotFoundPage from "../misc/NotFoundPage";
import Header from "../header/Header";
import HeaderImage from "../header/HeaderImage";
import Footer from "../footer/Footer";
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
          <div className="center">
            <div key={this.state.blog.url}>
              <h1>
                <strong className="bolder-font">{this.state.blog.title}</strong>
              </h1>
              <p className="author">
                POSTED BY {this.state.blog.firstName + " "+this.state.blog.lastName}
                <br />
                {moment(this.state.blog.date).calendar() }
                <br />
                {this.state.blog.tags}
              </p>
              {vidLink}
              {podLink}
              <div className="row">
                <div className="col l8 m10 offset-l2 offset-m1 s12">
                  <div className="blogText">{reactElement}</div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      );
    }
  }
}

export default BlogPageDirectory;
