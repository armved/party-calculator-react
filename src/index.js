import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
