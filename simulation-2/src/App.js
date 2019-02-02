import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import routes from './routes';
import { HashRouter } from 'react-router-dom';
import store from './ducks/store';
import {Provider} from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
      <HashRouter>
        <div>
        <Header />
        {routes}
        </div>
        </HashRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
