import React, { Component } from 'react';
import BlogPostWithContent from './BlogPostWithContent';
import { Route, Link } from 'react-router-dom';

const BlogPageContent = ({match}) => (
  // state = {
  //   response: []
  // };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState(
  //         { response: [1,2,3,]}
  //       )
  //     )
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   return "test";
  // };

  // test = "this is a test blog title";

  // render() {
  //   return (
      <div >
        <h2 className='center'>Blog Directory</h2>
        <Link to="/blog/test" >Go to Test Blog</Link>
        <div>
          <Route image1='https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c4b5fcc53abd6158286dc86a9be4bee&auto=format&fit=crop'  title1='test123' path={match.url + '/test'} component={BlogPostWithContent}/>
        </div>
      </div>
  //   );
  // }
)

export default BlogPageContent;    
