import React, { Component } from "react";
import { Route } from 'react-router';
import _ from 'underscore'
import axios from "axios";
import sp from 'synchronized-promise';
var routes = []

async function getRoutes () {
  let values1 = axios.get("/api/topics")
    .then(res => res.data)
    .then(resjson => resjson.map(a => "topic/" + a.topicName));

  let values2 = axios.get("/api/categories")
    .then(res => res.data)
    .then(resjson => resjson.map(a => "blogs/" + a.replace(" ","")));
  
  let values3 = axios.get("/api/testblogs")
    .then(res => res.data)
    .then(resjson => resjson.blogs.map(a => "blog/" + a.url));
  
  var route1 = await values1;
  var route2 = await values2;
  var route3 = await values3;
  return route1.concat(route2).concat(route3);

}

routes = [
  "/",
  "/blogs",
  "/blog",
  "/about-me",
  "/podcast",
  "/video",
  "/topics"
]
getRoutes().then(function(result) {  
  result.map(a =>
    routes.push(a) 
  )
  // console.log(routes)
})

// class Test extends Component {
//   // componentDidMount() {
//   //   // getRoutes().then(function(result) {  
//   //   //   result.map(a =>
//   //   //     routes.push(<Route path={a} />) 
//   //   //     )
//   //   //   console.log(result)
//   //   // })

//   // }
//   render() {
//     let routes = [
//       <Route exact path="/" />,
//       <Route exact path="/blogs" />,
//       <Route exact path="/blog" />,
//       <Route exact path="/about-me" />,
//       <Route exact path="/podcast" />,
//       <Route exact path="/video" />,
//       <Route exact path="/topics" />
//     ]
//     return (
//       <Route>
//         {routes}
//       </Route>    
//     );
//   }
// }


export default (
  <Route>
    <Route path='/' />
    <Route path='/blogs' />
    <Route path='/blog' />
    <Route path='/about-me' />
    <Route path='/podcast' />
    <Route path='/video' />
    <Route path='/topics' />
    <Route path='topic/budgeting' />
    <Route path='topic/course-planning' />
    <Route path='topic/summer-school' />
    <Route path='topic/outside-course-credit' />
    <Route path='topic/grad-school' />
    <Route path='topic/getting-permission' />
    <Route path='topic/jobs' />
    <Route path='topic/social-life' />
    <Route path='topic/tutoring' />
    <Route path='topic/mindset' />
    <Route path='topic/student-loans' />
    <Route path='topic/time-management' />
    <Route path='topic/double-majors-and-minors' />
    <Route path='blogs/motivation' />
    <Route path='blogs/planning' />
    <Route path='blogs/homework' />
    <Route path='blogs/methods' />
    <Route path='blog/intro-to-college' />
    <Route path='blog/two-year-degree-motivation' />
    <Route path='blog/picking-your-university' />
    <Route path='blog/right-study-method' />
  </Route>
);