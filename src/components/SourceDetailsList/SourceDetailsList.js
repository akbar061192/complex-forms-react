import React, { useContext } from 'react';
import SingleSourceDetail from './SingleSourceDetail';
import { LayoutContext } from '../../context/LayoutContext';

const SourceDetailsList = () => {
  const {
    sourcedetails,
    addNewSourceDetail,
    handleChangeSourceDetails,
    handleDeleteSourceDetail,
  } = useContext(LayoutContext);

  return (
    <>
      <div className='container'>
        <div className='row mx-auto'>
          <div className='col-md-12 mx-auto'>
            <h4 className='mb-4 text-center'>Source Details</h4>
          </div>
          <button
            className='btn btn-primary mx-auto my-3'
            onClick={addNewSourceDetail}
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
                {sourcedetails.map(function (param, index) {
                  return (
                    <SingleSourceDetail
                      key={param.id}
                      param={param}
                      index={index}
                      handleChange={handleChangeSourceDetails}
                      handleDelete={handleDeleteSourceDetail}
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

export default SourceDetailsList;
