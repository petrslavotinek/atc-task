import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import { fileOperations, fileSelectors } from 'data/files';
import FilesList from 'scenes/FilesList/FilesList';
import FileDetail from 'scenes/FileDetail/FileDetail';
import Loader from './components/Loader/Loader';

const mapState = (state) => ({
  isLoading: fileSelectors.isLoading(state)
});

const mapDispatch = {
  loadFiles: fileOperations.loadFiles
};

class App extends Component {

  componentDidMount() {
    const { loadFiles } = this.props;
    loadFiles();
  }

  render() {
    const { isLoading } = this.props;

    return (
      <React.Fragment>
        {isLoading
          ? <Loader />
          :
          <Switch>
            <Route path="/detail/:id" component={FileDetail} />
            <Route exact path="/" component={FilesList} />
          </Switch>
        }
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapState, mapDispatch)(App));