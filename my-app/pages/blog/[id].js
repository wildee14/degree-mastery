import React from "react";
import moment from "moment";
import NotFoundPage from "../../components/misc/NotFoundPage";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import useAxios from "axios-hooks";
import { useRouter } from "next/router";


function BlogPageDirectory() {
  const router = useRouter();
  console.log(router);
  const [{ data, loading, error }, refetch] = useAxios(
    `http://localhost:8081/api/testblog/${router.route.replace("/blog/", "")}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <NotFoundPage />;

  if (!data.blog || data.blog.length === 0) {
    return <NotFoundPage />;
  } else {
    let vidLink, podLink;
    if (!!data.blog.vid) {
      vidLink = (
        <div className="row">
          <div className="col m3" />
          <div className="col m6">
            <div className="video-container">
              <iframe
                width="400"
                height="200"
                src={data.blog.vid}
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
    if (!!data.blog.pod) {
      podLink = (
        <a href={data.blog.pod} type="audio/mp3">
          Podcast Link
        </a>
      );
    } else {
      podLink = <div />;
    }
    var HtmlToReactParser = require("html-to-react").Parser;
    var htmlToReactParser = new HtmlToReactParser();
    var reactElement = htmlToReactParser.parse(data.blog.body);

    return (
      <div>
        <Header />
        <div className="center">
          <div key={data.blog.url}>
            <h1>
              <strong className="bolder-font">{data.blog.title}</strong>
            </h1>
            <p className="author">
              POSTED BY {data.blog.firstName + " " + data.blog.lastName}
              <br />
              {moment(data.blog.date).calendar()}
              <br />
              {data.blog.tags}
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

export default BlogPageDirectory;
