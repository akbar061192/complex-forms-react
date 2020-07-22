import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

const LayoutContext = createContext();

const LayoutContextProvider = (props) => {
  const [clientName, setClientName] = useState('');
  const [emails, setEmails] = useState('');
  const [layoutName, setLayoutName] = useState('');
  const [processingParameters, setProcessingParameters] = useState([]);
  const [sourcetype, setSourceType] = useState('');
  const [sourceconnection, setSourceConnection] = useState('');
  const [cdc, setCdc] = useState({
    cdctargettablename: '',
    cdcprimarykeycols: '',
    cdchistorypartitioncols: '',
    cdcfilter: '',
    cdctype: '',
    cdcpartialcurrentperiod: '',
    cdcpartiallookback: '',
  });
  const [uniquecols, setUniqueCols] = useState('');
  const [cols, setCols] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      JSON.stringify({
        clientName,
        emails,
        layoutName,
        layoutinfo: {
          tables: {
            problem_list: {
              sourcetype,
              sourceconnection,
            },
            cdc,
            uniquecols,
            cols,
          },
          processingParameters,
        },
      })
    );
  };

  // ADD A NEW PROCESSING PARAMETER FOR LINE 10
  const addNewProcessingParameter = () => {
    const newParam = {
      id: uuid(),
      value: '',
      attribute: '',
    };
    setProcessingParameters([...processingParameters, newParam]);
  };

  // ADD A NEW COL FOR LINE 23
  const addNewCol = () => {
    const newCol = {
      id: uuid(),
      maxlength: '',
      datatype: '',
      columnname: '',
      exceptedvalues: '',
    };
    setCols([...cols, newCol]);
  };

  // HANDLING INPUT CHANGE FOR LINE 10
  const handleChange = (event) => {
    const values = [...processingParameters];
    values[event.target.dataset.id][event.target.name] = event.target.value;
    setProcessingParameters([...values]);
  };

  // HANDLING INPUT CHANGE FOR LINE 23
  const handleChangeCols = (event) => {
    const values = [...cols];
    values[event.target.dataset.id][event.target.name] = event.target.value;
    setCols([...values]);
  };

  // DELETING INPUT FOR LINE 10
  const handleDelete = (id) => {
    const filteredItems = processingParameters.filter((param) => {
      return param.id !== id;
    });
    setProcessingParameters(filteredItems);
  };

  // DELETING INPUT FOR LINE 10
  const handleDeleteCols = (id) => {
    const filteredItems = cols.filter((param) => {
      return param.id !== id;
    });
    setCols(filteredItems);
  };
  return (
    <LayoutContext.Provider
      value={{
        clientName,
        emails,
        layoutName,
        setClientName,
        setEmails,
        setLayoutName,
        handleSubmit,
        processingParameters,
        setProcessingParameters,
        addNewProcessingParameter,
        handleChange,
        handleDelete,
        sourcetype,
        sourceconnection,
        setSourceType,
        setSourceConnection,
        cdc,
        setCdc,
        uniquecols,
        setUniqueCols,
        cols,
        setCols,
        addNewCol,
        handleChangeCols,
        handleDeleteCols,
      }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};

export { LayoutContext, LayoutContextProvider };
