import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Navigation } from './components/navigation';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './index.css';
import App from './App';
import Shop from './Shop'
import * as serviceWorker from './serviceWorker';
import NotFound from './notfound'

const render = (Component) => {
  ReactDOM.render(
    <Fragment>
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </Fragment>,
    document.getElementById('root')
  );
}

render(App)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
