import React, { useContext } from 'react';
import SingleParameter from './SingleParameter';
import { LayoutContext } from '../../context/LayoutContext';

const ProcessingParameters = () => {
  const {
    processingParameters,
    setProcessingParameters,
    addNewProcessingParameter,
    handleChange,
    handleDelete,
  } = useContext(LayoutContext);

  return (
    <>
      <div className='container'>
        <div className='row mx-auto'>
          <div className='col-md-12 mx-auto'>
            <h4 className='mb-4 text-center'>Processing Level Parameters</h4>
          </div>
          <button
            className='btn btn-primary mx-auto my-3'
            onClick={addNewProcessingParameter}
          >
            Add
          </button>
          <div className='col-md-12 text-center mx-auto'>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th scope='col'>Value</th>
                  <th scope='col'>Attribute</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {processingParameters.map(function (param, index) {
                  return (
                    <SingleParameter
                      key={param.id}
                      param={param}
                      setProcessingParameters={setProcessingParameters}
                      index={index}
                      processingParameters={processingParameters}
                      handleChange={handleChange}
                      handleDelete={handleDelete}
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

export default ProcessingParameters;
