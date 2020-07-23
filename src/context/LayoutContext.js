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
  const [spark, setSpark] = useState({
    principal: '',
    jarlocation: '',
    driver_memory: '',
    executor_memory: '',
    executor_cores: '',
    num_executors: '',
    spark_sql_shuffle_partitions: '',
    spark_default_parallelism: '',
    spark_yarn_queue: '',
    spark_yarn_submit_waitappcompletion: '',
  });
  const [schedule, setSchedule] = useState('');
  const [optionsVal, setOptionsVal] = useState({
    hadoopstagingpath: '',
    hadoopinvalidpath: '',
    hadoopprocessedpath: '',
    hadoopuser: '',
    ftpuser: '',
    options: '',
    ftppassword: '',
    ftphost: '',
    ftppath: '',
    triggerfileextension: '',
    filenamedelimiter: '',
    groupfilecount: '',
    negate: '',
  });
  const [workflow, setWorkFlow] = useState([]);
  const [airflow, setAirFlow] = useState({
    emailreportpath: '',
    deletedagpath: '',
    restapihost: '',
    restapipath: '',
    experimentalrestapihost: '',
  });
  const [sourcedetails, setSourceDetails] = useState([]);
  const [etltarget, setEtlTarget] = useState([]);
  const [json, setJson] = useState(false);
  const [data, setData] = useState('');

  const handleVerify = (event) => {
    event.preventDefault();
    setJson(true);
    const output = JSON.stringify({
      clientName,
      emails,
      layoutName,
      layoutinfo: {
        tables: {
          problem_list: {
            sourcedetails: {
              sourcetype,
              sourceconnection,
            },
            cdc,
            uniquecols,
            cols,
          },
        },
        processingParameters,
        configparameters: {
          spark,
          watcher: {
            schedule,
            options: optionsVal,
          },
          workflow,
          airflow,
          sourcedetails,
          etltarget,
        },
      },
    });
    console.log(output);
    setData(output);
  };

  // CLEAR JSON DATA

  const clearData = () => {
    setJson(false);
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

  // ADD A NEW WORKFLOW FOR LINE 52
  const addNewWorkFlow = () => {
    const newWorkFlow = {
      id: uuid(),
      start: '',
      end: '',
    };
    setWorkFlow([...workflow, newWorkFlow]);
  };

  // ADD A NEW SOURCE DETAIL FOR LINE 60
  const addNewSourceDetail = () => {
    const newSourceDetail = {
      id: uuid(),
      value: '',
      attribute: '',
    };
    setSourceDetails([...sourcedetails, newSourceDetail]);
  };

  // ADD A NEW SOURCE DETAIL FOR LINE 61
  const addNewETlTarget = () => {
    const newEtlTarget = {
      id: uuid(),
      value: '',
      attribute: '',
    };
    setEtlTarget([...etltarget, newEtlTarget]);
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

  // HANDLE INPUT CHANGE FOR LINE 52
  const handleChangeWorkFlow = (event) => {
    const values = [...workflow];
    values[event.target.dataset.id][event.target.name] = event.target.value;
    setWorkFlow([...values]);
  };

  // HANDLE INPUT CHANGE FOR LINE 60
  const handleChangeSourceDetails = (event) => {
    const values = [...sourcedetails];
    values[event.target.dataset.id][event.target.name] = event.target.value;
    setSourceDetails([...values]);
  };

  // HANDLE INPUT CHANGE FOR LINE 61
  const handleChangeETLTarget = (event) => {
    const values = [...etltarget];
    values[event.target.dataset.id][event.target.name] = event.target.value;
    setEtlTarget([...values]);
  };

  // DELETING INPUT FOR LINE 10
  const handleDelete = (id) => {
    const filteredItems = processingParameters.filter((param) => {
      return param.id !== id;
    });
    setProcessingParameters(filteredItems);
  };

  // DELETING INPUT FOR LINE 23
  const handleDeleteCols = (id) => {
    const filteredItems = cols.filter((param) => {
      return param.id !== id;
    });
    setCols(filteredItems);
  };

  // DELETING INPUT FOR LINE 52
  const handleDeleteWorkFlow = (id) => {
    const filteredItems = workflow.filter((param) => {
      return param.id !== id;
    });
    setWorkFlow(filteredItems);
  };

  // DELETING INPUT FOR LINE 60
  const handleDeleteSourceDetail = (id) => {
    const filteredItems = sourcedetails.filter((param) => {
      return param.id !== id;
    });
    setSourceDetails(filteredItems);
  };

  // DELETING INPUT FOR LINE 61
  const handleDeleteETLTarget = (id) => {
    const filteredItems = etltarget.filter((param) => {
      return param.id !== id;
    });
    setEtlTarget(filteredItems);
  };

  // HANDLE SUBMIT
  const handleSubmit = () => {
    console.log('Loading...');
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
        handleVerify,
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
        spark,
        setSpark,
        schedule,
        setSchedule,
        optionsVal,
        setOptionsVal,
        workflow,
        setWorkFlow,
        addNewWorkFlow,
        handleChangeWorkFlow,
        handleDeleteWorkFlow,
        airflow,
        setAirFlow,
        sourcedetails,
        setSourceDetails,
        addNewSourceDetail,
        handleChangeSourceDetails,
        handleDeleteSourceDetail,
        etltarget,
        setEtlTarget,
        addNewETlTarget,
        handleChangeETLTarget,
        handleDeleteETLTarget,
        json,
        data,
        clearData,
        handleSubmit,
      }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};

export { LayoutContext, LayoutContextProvider };
