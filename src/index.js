import React from 'react';
import ReactDOM from 'react-dom';
//import 'bulma/css/bulma.css';

import Root from 'scenes/Root';
import history from 'services/history';
import configureStore from 'services/configureStore';
import { buildIconsLibrary } from './iconsLibrary';
import 'scenes/styles/index.css';

buildIconsLibrary();

const store = configureStore();

ReactDOM.render(
  <Root
    history={history}
    store={store}
  />,
  document.getElementById('root')
);