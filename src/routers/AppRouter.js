import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import BodyFlashy from "../components/BodyFlashy";
import BlogPageDirectory from "../components/BlogPageDirectory";
import LandingPage from "../components/LandingPage";
import BlogDirectory from "../components/BlogDirectory";
import {withRouter} from 'react-router';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={withRouter(LandingPage)} />
      <Route exact path="/blogs" component={withRouter(BlogDirectory)} />
      <Route path="/blogs/:category" component={withRouter(LandingPage)} />
      <Route path="/blog/:id" component={withRouter(BlogPageDirectory)} />
      <Route exact path="/blog" component={withRouter(LandingPage)} />
      <Route exact path="/podcast" component={withRouter(BodyFlashy)} />
      <Route exact path="/video" component={withRouter(BodyFlashy)} />
      <Route component={withRouter(NotFoundPage)} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
