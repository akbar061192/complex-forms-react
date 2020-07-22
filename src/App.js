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

const App = () => {
  return (
    <LayoutContextProvider>
      <Navbar />
      <LayoutMain />
      <SourceDetails />
      <CDCLayout />
      <Cols />
      <ProcessingParameters />
    </LayoutContextProvider>
  );
};

export default App;
