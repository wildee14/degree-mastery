import React, { Component } from "react";
import BlogPostSnippet from "../blog/BlogPostSnippet";
import Header from "../header/Header";
import HeaderImage from "../header/HeaderImage";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import axios from "axios";
import TopicSnippet from "./TopicSnippet";

class TopicDirectory extends Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    var fetchUrl ="/api/topics" ;
    axios.get(fetchUrl)
      .then(res => res.data)
      .then(resjson =>
        this.setState({
          topics: resjson
        })
      );

  }
  render() {
    return (
      <div>
        <Header />
        <div className="row background">
          <div className="col xl12 l12 m12 s12">
            <div className="App">
              <div>
                <h1 className="center posts">
                  <strong>Topics</strong>
                </h1>
              </div>
              <div className="box">
                {this.state.topics
                  .map(topic => (
                    <TopicSnippet
                      key={topic.topicName}
                      title={topic.topicLongName}
                      shortTitle={topic.topicName}
                      image={"/images/" + topic.topicName + ".jpg"}
                    />
                  ))
                }
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

export default TopicDirectory;
