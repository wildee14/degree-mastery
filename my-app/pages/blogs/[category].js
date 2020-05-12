import React from "react";
import BlogPostSnippet from "../../components/blog/BlogPostSnippet";
import Header from "../../components/header/Header";
import HeaderImage from "../../components/header/HeaderImage";
import Sidebar from "../../components/sidebar/SidebarPage";
import Footer from "../../components/footer/Footer";
import useAxios from "axios-hooks";
import { useRouter } from 'next/router';

function LandingPage(props) {
  var fetchUrl = "http://localhost:8081/api/testblogs";
  const router = useRouter();
  console.log("props");
  console.log(props);
  let url = router.route.replace("/blogs/", "");
  fetchUrl = url.includes("/") ? fetchUrl : `${fetchUrl}/${url}`;
  const [{ data, loading, error }, refetch] = useAxios(fetchUrl);
  console.log(data);
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <HeaderImage />
      <div className="row background">
        <div className="col xl9 l9 m12 s12">
          <div className="App">
            <div>
              <h1 className="center posts">
                <strong>Early Grad Syllabus</strong>
              </h1>
            </div>
            <div className="box">
              {data.blogs
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map(blog => (
                  <BlogPostSnippet key={blog.url} blog={blog} />
                ))}
            </div>
          </div>
        </div>
        <div className="col xl3 l3 m12 s12">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
