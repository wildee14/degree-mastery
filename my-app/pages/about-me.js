import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function AboutMe() {
  return (
    <div>
      <Header />
      <div className="center">
        <div className="row">
          <div className="col l8 m10 offset-l2 offset-m1 s12">
            <div className="card">
              <div className="card-image">
                <img className="responsive-img" src="/images/about-me.jpg" />
              </div>
              <div className="card-content">
                <div className="blogText">
                  <h1>About Me</h1>
                  <h2>How Did I Get Here</h2>
                  <p>
                    As a college student burnt out on the idea of going through
                    more school and having a burning desire to travel, I knew I
                    had to change my trajetory. The solution was figure out a
                    way to graduate college in half the time. So I started
                    bullking credits and buckling down on my workload. I found
                    it suprisingly managable after a certain time of
                    acclimization. So once I handled 20 credit semester, I knew
                    I could make my goal a reality. I sacraficed time with
                    friends and time to relax but what I gained was massive. I
                    allowed myself freedom. Freedom to travel, freedom to earn a
                    salary early, and freedom make the decisions I wanted
                    without worrying about making ends meet. This newfound
                    freedom drastically changed my life and perspective on the
                    life should work. I can be picky about what I value and in
                    doing so, create a life of enjoyment with work as a side
                    focus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutMe;
