import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {Settings} from '../../pages/settings/settings';
import {Header} from '../header/header';
import {PageNotFound} from '../../pages/page-not-found/page-not-found';
import ImageSearch from '../../pages/image-search/image-search';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <main>
          <Switch>
            <Route path="/" exact component={ImageSearch} />
            <Route path="/settings" component={Settings} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}