import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ImageSearch from "../../pages/image-search/image-search";
import PageNotFound from "../../pages/page-not-found/page-not-found";
import Settings from "../../pages/settings/settings";
import Header from "../header/header";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Switch>
          <Route path="/" exact={true} component={ImageSearch} />
          <Route path="/settings" component={Settings} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}
