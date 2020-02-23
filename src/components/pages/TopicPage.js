import React from "react";
import BlogPostSnippet from "../blog/BlogPostSnippet";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";

import useAxios from 'axios-hooks'
import NotFoundPage from "../misc/NotFoundPage";

function TopicPage(props) {

  const [{ data, loading, error }, refetch] = useAxios(
    "/api/topic/" + props.location.pathname.replace("/topic/", "")
  )

  if (loading) return <p>Loading...</p>
  if (error) return <NotFoundPage />
    

    return (
      <div>
        <Header />
        <div className="row background">
          <div className="col xl9 l9 m10 s10">
            <div className="App">
              <div>
                <h1 className="center posts">
                  <strong>Blog Directory</strong>
                </h1>
                <div className="box">
                  {data.blogs
                    .map(blog => (
                      <BlogPostSnippet
                        key={blog.url}
                        blog={blog}
                      />
                    ))
                  }               
                 </div>
              </div>
            </div>
          </div>
          <div className="col xl3 l3 m2 s2">
            <Sidebar />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
export default TopicPage;
