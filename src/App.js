import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { LayoutContextProvider } from './context/LayoutContext';
import LayoutMain from './components/LayoutMain/LayoutMain';
import ProcessingParameters from './components/ProcesingParameters/ProcessingParameters';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import SourceDetails from './components/SourceDetails/SourceDetails';
import CDCLayout from './components/CDC/CDCLayout';
import Cols from './components/Cols/Cols';
import SparkParam from './components/SparkParameters/SparkParam';
import Options from './components/Options/Options';
import WorkFlow from './components/WorkFlow/WorkFlow';
import AirFlow from './components/AirFlow/AirFlow';
import SourceDetailsList from './components/SourceDetailsList/SourceDetailsList';
import ETLTargets from './components/ETLTarget/ETLTargets';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <LayoutContextProvider>
        <Navbar />
        <Switch>
          <Route exact path='/' component={LayoutMain} />
          <Route exact path='/source-details' component={SourceDetails} />
          <Route exact path='/cdc-layout' component={CDCLayout} />
          <Route exact path='/cols' component={Cols} />
          <Route
            exact
            path='/processing-params'
            component={ProcessingParameters}
          />
          <Route exact path='/spark-param' component={SparkParam} />
          <Route exact path='/options' component={Options} />
          <Route exact path='/workflow' component={WorkFlow} />
          <Route exact path='/airflow' component={AirFlow} />
          <Route
            exact
            path='/source-details-list'
            component={SourceDetailsList}
          />
          <Route path='/etl-targets' component={ETLTargets} />
        </Switch>
      </LayoutContextProvider>
    </Router>
  );
};

export default App;
