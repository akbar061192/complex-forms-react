import React, { useContext } from 'react';
import SingleCol from './SingleCol';
import { LayoutContext } from '../../context/LayoutContext';

const Cols = () => {
  const { cols, handleChangeCols, addNewCol, handleDeleteCols } = useContext(
    LayoutContext
  );

  return (
    <>
      <div className='container'>
        <div className='row mx-auto'>
          <div className='col-md-12 mx-auto'>
            <h4 className='mb-4 text-center'>Column Parameters</h4>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Cols;
