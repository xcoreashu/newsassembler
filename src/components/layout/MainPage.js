import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Articles from '../articles/Articles';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/google-news-in" component={Articles} />>
          <Route path="/the-hindu" component={Articles} />>
          <Route path="/the-economist" component={Articles} />>
          <Route path="/the-times-of-india" component={Articles} />>
          <Route path="/techcrunch" component={Articles} />>
          <Route path="/techradar" component={Articles} />>
          <Route path="/google-news" component={Articles} />>
          <Redirect to="/google-news-in" />>
        </Switch>
      </div>
    );
  }
}

export default MainPage;
