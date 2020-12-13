import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import loadable from "@loadable/component";
import About from "../component/About";
import CardPage from "../component/CardPage";
import CreateBlog from "../component/CreateBlog";
import FullDes from "../component/FullDes";
import Signin from "../component/Signin";
import Register from "../component/Register";

// const CardPage = loadable(() => import("../component/CardPage"));
// const CreateBlog = loadable(() => import("../component/CreateBlog"));
// const FullDes = loadable(() => import("../component/FullDes"));

const Router = () => {
  return (
    <React.Fragment>
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={CardPage} />
      <Route exact path="/create" component={CreateBlog} />
      <Route exact path="/fulldes/:id" component={FullDes} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/register" component={Register} />
    </React.Fragment>
  );
};

export default Router;
