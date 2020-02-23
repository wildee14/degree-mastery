import React from "react";
import Header from "../header/Header";
import useAxios from 'axios-hooks'
import Sidebar from "../sidebar/Sidebar";
import BlogTable from "./BlogTable";
import Footer from "../footer/Footer";

function BlogDirectory(props) {
  var fetchUrl = '/api/testblogs';
  let url = props.location.pathname.replace("/blogs/", "");
  fetchUrl = (url.includes("/")) ? fetchUrl : `${fetchUrl}/${url}`;
  const [{ data, loading, error }, refetch] = useAxios(
    fetchUrl
  )
  if (loading) return <p>Loading...</p>

  return (
    <div>
      <Header />
      <div className="row background">
        <div className="col xl9 l8 m12 s12">
          <div className="App">
            <div>
              <h1 className="center posts">
                <strong>Blog Directory</strong>
              </h1>
              <BlogTable blogs={data.blogs} />
            </div>
          </div>
        </div>
        <div className="col xl3 l4 m10 offset-m1 s12">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogDirectory;
