import React from "react";
import BlogPostSnippet from "../../components/blog/BlogPostSnippet";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/SidebarPage";
import Footer from "../../components/footer/Footer";
import { useRouter } from "next/router";

import useAxios from "axios-hooks";
import NotFoundPage from "../../components/misc/NotFoundPage";

function TopicPage(props) {
  const router = useRouter();

  const [{ data, loading, error }, refetch] = useAxios(
    `http://localhost:8081/api/testblog/${router.route.replace("/blog/", "")}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <NotFoundPage />;

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
                {data.blogs.map(blog => (
                  <BlogPostSnippet key={blog.url} blog={blog} />
                ))}
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
