import React, { useContext } from 'react';
import { LayoutContext } from '../../context/LayoutContext';
import { Link } from 'react-router-dom';

const CDCLayout = () => {
  const { cdc, setCdc, uniquecols, setUniqueCols } = useContext(LayoutContext);

  const {
    cdcfilter,
    cdchistorypartitioncols,
    cdcpartialcurrentperiod,
    cdcpartiallookback,
    cdcprimarykeycols,
    cdctargettablename,
    cdctype,
  } = cdc;

  const cdcHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setCdc((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mx-auto m-5'>
              <h4 className='mb-4 text-center'>CDC Details</h4>
              <form>
                <div className='form-group'>
                  <label htmlFor='cdcfilter'>CDC Filter</label>
                  <input
                    type='text'
                    className='form-control'
                    name='cdcfilter'
                    value={cdcfilter}
                    onChange={cdcHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='cdchistorypartitioncols'>
                    CDC History Partition Columns
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='cdchistorypartitioncols'
                    value={cdchistorypartitioncols}
                    onChange={cdcHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='cdcpartialcurrentperiod'>
                    CDC Partial Current Period
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='cdcpartialcurrentperiod'
                    value={cdcpartialcurrentperiod}
                    onChange={cdcHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='cdcpartiallookback'>
                    CDC Partial Look Back
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='cdcpartiallookback'
                    value={cdcpartiallookback}
                    onChange={cdcHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='cdcprimarykeycols'>
                    CDC Primary Key Columns
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='cdcprimarykeycols'
                    value={cdcprimarykeycols}
                    onChange={cdcHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='cdctargettablename'>
                    CDC Target Table Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='cdctargettablename'
                    value={cdctargettablename}
                    onChange={cdcHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='cdctype'>CDC Type</label>
                  <input
                    type='text'
                    className='form-control'
                    name='cdctype'
                    value={cdctype}
                    onChange={cdcHandleChange}
                  />
                </div>
                <hr />
                <div className='form-group'>
                  <label htmlFor='uniquecols'>Unique Columns</label>
                  <input
                    type='text'
                    className='form-control'
                    name='uniquecols'
                    value={uniquecols}
                    onChange={(event) => setUniqueCols(event.target.value)}
                  />
                </div>
              </form>
              <div className=' d-flex justify-content-between '>
                <Link to='/source-details'>
                  <button type='button' className='btn btn-dark mt-2'>
                    Back
                  </button>
                </Link>
                <Link to='/cols'>
                  <button type='button' className='btn btn-dark mt-2'>
                    Next
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CDCLayout;
