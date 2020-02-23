import React from 'react';
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import TopicSnippet from "./TopicSnippet";
import useAxios from 'axios-hooks'
import NotFoundPage from "../misc/NotFoundPage";

function TopicDirectory() {
  const [{ data, loading, error }, refetch] = useAxios(
    '/api/topics'
  )

  if (loading) return <p>Loading...</p>
  if (error) return <NotFoundPage />

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
              {data
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

export default TopicDirectory;
