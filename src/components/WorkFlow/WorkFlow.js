import React, { useContext } from 'react';
import SingleWorkFlow from './SingleWorkFlow';
import { LayoutContext } from '../../context/LayoutContext';

const WorkFlow = () => {
  const {
    workflow,
    setWorkFlow,
    addNewWorkFlow,
    handleChangeWorkFlow,
    handleDeleteWorkFlow,
  } = useContext(LayoutContext);

  return (
    <>
      <div className='container'>
        <div className='row mx-auto'>
          <div className='col-md-12 mx-auto'>
            <h4 className='mb-4 text-center'>WorkFlow Parameters</h4>
          </div>
          <button
            className='btn btn-primary mx-auto my-3'
            onClick={addNewWorkFlow}
          >
            Add
          </button>
          <div className='col-md-12 text-center mx-auto'>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th scope='col'>Start</th>
                  <th scope='col'>End</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {workflow.map(function (param, index) {
                  return (
                    <SingleWorkFlow
                      key={param.id}
                      param={param}
                      setWorkFlow={setWorkFlow}
                      index={index}
                      handleChange={handleChangeWorkFlow}
                      handleDelete={handleDeleteWorkFlow}
                    />
                  );
                })}
              </tbody>
            </table>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkFlow;
