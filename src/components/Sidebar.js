import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Sidebar extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    axios.get("/api/categories")
      .then(function(res){return res.data;})
      .then(resjson =>
        this.setState({
          categories: resjson
        })
      );
  }
  render() {
    return (
      <div >

        <div className="container sidebar">
          <div className="row">
            <div className="col xl12 l12 m12 s12">
              <div className="card">
                <div className="card-content">
                  <h2 className="card-title">
                    Early Grad Video Course
                    Coming Soon
                  </h2>
                </div>
              </div>
            </div>

            <div className="col xl12 l12 m12 s12">
              <div className="card">
                <div className="card-content">
                  <h2 className="card-title">
                    Subscribe to the newsletter!
                    Get the latest on college credit hacking
                  </h2>

                  <div id="mc_embed_signup">
                    <form action="https://gmail.us20.list-manage.com/subscribe/post?u=0fdbc8817de59ffe40975168c&amp;id=3e0813f535" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                        <div id="mc_embed_signup_scroll">
                          <input type="email" defaultValue="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
                            <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button btn btn-success red" /></div>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col xl12 l12 m12 s12">
              <div className="card">
                <div className="card-content">
                  <span className="overflow-text card-title">Popular Tags:</span>
                  <ul>
                    {this.state.categories.map((category, index) => (
                      <li key={category} className="left-align collection">
                        <Link
                          key={category + "1"}
                          to={"/blogs/" + category}
                          className="collection-item"
                          >
                          {category}
                          {index < category.length ? "\n" : ""}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col s1" />
      </div>
    );
  }
}

export default Sidebar;
