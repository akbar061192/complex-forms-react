import React, { useContext } from 'react';
import SingleCol from './SingleCol';
import { LayoutContext } from '../../context/LayoutContext';
import { Link } from 'react-router-dom';

const Cols = () => {
  const { cols, handleChangeCols, addNewCol, handleDeleteCols } = useContext(
    LayoutContext
  );

  return (
    <>
      <div className='container'>
        <div className='row mx-auto'>
          <div className='col-md-12 mx-auto mt-5'>
            <h4 className='mb-3 text-center'>Column Parameters</h4>
          </div>
          <button className='btn btn-primary mx-auto my-3' onClick={addNewCol}>
            Add
          </button>
          <div className='col-md-12 text-center mx-auto'>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th scope='col'>Max Length</th>
                  <th scope='col'>Data Type</th>
                  <th scope='col'>Column Name</th>
                  <th scope='col'>Expected Values</th>
                </tr>
              </thead>
              <tbody>
                {cols.map(function (col, index) {
                  return (
                    <SingleCol
                      key={col.id}
                      col={col}
                      index={index}
                      handleChangeCols={handleChangeCols}
                      handleDeleteCols={handleDeleteCols}
                    />
                  );
                })}
              </tbody>
            </table>
            <hr />
            <div className=' d-flex justify-content-between '>
              <Link to='/cdc-layout'>
                <button type='button' className='btn btn-dark mt-2'>
                  Back
                </button>
              </Link>
              <Link to='/processing-params'>
                <button type='button' className='btn btn-dark mt-2'>
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cols;
