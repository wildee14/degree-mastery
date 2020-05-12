import React from "react";
import { BrowserRouter, Route, Switch} from "next/link";
import NotFoundPage from "../components/misc/NotFoundPage";
import BlogPageDirectory from "../components/blog/BlogPageDirectory";
import LandingPage from "../components/pages/LandingPage";
import BlogDirectory from "../components/blog/BlogDirectory";
import AboutMe from "../components/about/AboutMe";
import TopicPage from "../components/pages/TopicPage";
import TopicDirectory from "../components/topics/TopicDirectory";
import {withRouter} from 'react-router';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={withRouter(LandingPage)} />
      <Route exact path="/blogs" component={withRouter(BlogDirectory)} />
      <Route path="/blogs/:category" component={withRouter(LandingPage)} />
      <Route path="/blog/:id" component={withRouter(BlogPageDirectory)} />
      <Route path="/topic/:topic" component={withRouter(TopicPage)} />
      <Route exact path="/blog" component={withRouter(LandingPage)} />
      <Route exact path="/about-me" component={withRouter(AboutMe)} />
      <Route exact path="/topics" component={withRouter(TopicDirectory)} />
      <Route component={withRouter(NotFoundPage)} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
