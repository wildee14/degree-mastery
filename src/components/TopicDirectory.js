import React, { Component } from "react";
import BlogPostSnippet from "./BlogPostSnippet";
import Header from "./Header";
import HeaderImage from "./HeaderImage";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
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
        <HeaderImage />
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
