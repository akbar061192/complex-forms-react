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
import FormSubmit from './components/FormSubmit/FormSubmit';

const App = () => {
  return (
    <LayoutContextProvider>
      <Navbar />
      <LayoutMain />
      <SourceDetails />
      <CDCLayout />
      <Cols />
      <ProcessingParameters />
      <SparkParam />
      <Options />
      <WorkFlow />
      <AirFlow />
      <SourceDetailsList />
      <ETLTargets />
      <FormSubmit />
    </LayoutContextProvider>
  );
};

export default App;
