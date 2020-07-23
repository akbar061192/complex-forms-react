import React, { useContext } from 'react';
import { LayoutContext } from '../../context/LayoutContext';
import SingleETLTargert from './SingleETLTargert';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ETLTargets = () => {
  const {
    etltarget,
    addNewETlTarget,
    handleChangeETLTarget,
    handleDeleteETLTarget,
    handleVerify,
    json,
    data,
    handleSubmit,
    clearData,
    loading,
  } = useContext(LayoutContext);
  return (
    <>
      <div className='container'>
        <div className='row mx-auto'>
          <div className='col-md-12 mx-auto mx-auto mt-5'>
            <h4 className='mb-4 text-center'>ETL Target</h4>
          </div>
          <button
            className='btn btn-primary mx-auto mb-3'
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
            <div className=' d-flex justify-content-center '>
              <Link to='/source-details-list'>
                <button type='button' className='btn btn-dark my-4'>
                  Back
                </button>
              </Link>
              {!json && (
                <button
                  className='btn btn-primary my-4 mx-3 text-center'
                  type='submit'
                  onClick={handleVerify}
                >
                  Verify
                </button>
              )}
            </div>
            {loading && <Spinner />}
            {json && (
              <textarea
                disabled
                className='form-control mx-auto'
                defaultValue={data}
                style={{ width: '90%', height: '40vh', textAlign: 'center' }}
              ></textarea>
            )}
            <div>
              {json && (
                <button className='btn btn-danger m-2' onClick={clearData}>
                  Clear
                </button>
              )}
              {json && (
                <button className='btn btn-success m-2' onClick={handleSubmit}>
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ETLTargets;
