import React, { useContext } from 'react';
import { LayoutContext } from '../../context/LayoutContext';
import SingleETLTargert from './SingleETLTargert';

const ETLTargets = () => {
  const {
    etltarget,
    addNewETlTarget,
    handleChangeETLTarget,
    handleDeleteETLTarget,
  } = useContext(LayoutContext);
  return (
    <>
      <div className='container'>
        <div className='row mx-auto'>
          <div className='col-md-12 mx-auto'>
            <h4 className='mb-4 text-center'>ETL Target</h4>
          </div>
          <button
            className='btn btn-primary mx-auto my-3'
            onClick={addNewETlTarget}
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
                {etltarget.map(function (param, index) {
                  return (
                    <SingleETLTargert
                      key={param.id}
                      param={param}
                      index={index}
                      handleChange={handleChangeETLTarget}
                      handleDelete={handleDeleteETLTarget}
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

export default ETLTargets;
