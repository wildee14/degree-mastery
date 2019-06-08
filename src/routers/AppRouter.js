import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import BodyFlashy from "../components/BodyFlashy";
import BlogPageDirectory from "../components/BlogPageDirectory";
import LandingPage from "../components/LandingPage";
import BlogDirectory from "../components/BlogDirectory";
import AboutMe from "../components/AboutMe";
import TopicPage from "../components/TopicPage";
import TopicDirectory from "../components/TopicDirectory";
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
      <Route exact path="/podcast" component={withRouter(BodyFlashy)} />
      <Route exact path="/video" component={withRouter(BodyFlashy)} />
      <Route exact path="/topics" component={withRouter(TopicDirectory)} />
      <Route component={withRouter(NotFoundPage)} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
