import React, { Component } from "react";
import Header from "./Header";
import HeaderImage from "./HeaderImage";
import Sidebar from "./Sidebar";
import Footer from "./Footer";


class GenericPage extends Component {
  render() {
    const MainComponent = this.props.childComponent;
    const Test = <div>hello</div>
    return (
      <div>
        <Header />
        <HeaderImage />
        <div className="row background">
          <div className="col xl9 l9 m10 s10">
            {/* <div className="App"> */}
              <Test  />
            {/* </div> */}
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

export default GenericPage;
