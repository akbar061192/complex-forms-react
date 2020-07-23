import React, { useContext } from 'react';
import { LayoutContext } from '../../context/LayoutContext';
import { Link } from 'react-router-dom';

const SourceDetails = () => {
  const {
    sourcetype,
    sourceconnection,
    setSourceType,
    setSourceConnection,
  } = useContext(LayoutContext);

  return (
    <>
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mx-auto m-5'>
              <h4 className='mb-3 text-center'>Source Details</h4>
              <form>
                <div className='form-group'>
                  <label htmlFor='sourcetype'>Source Type</label>
                  <input
                    type='text'
                    className='form-control'
                    name='sourcetype'
                    value={sourcetype}
                    onChange={(event) => setSourceType(event.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='sourceconnection'>Source Connection</label>
                  <input
                    type='text'
                    className='form-control'
                    name='sourceconnection'
                    value={sourceconnection}
                    onChange={(event) =>
                      setSourceConnection(event.target.value)
                    }
                  />
                </div>
              </form>
              <div className=' d-flex justify-content-between '>
                <Link to='/'>
                  <button type='button' className='btn btn-dark mt-2'>
                    Back
                  </button>
                </Link>
                <Link to='/cdc-layout'>
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

export default SourceDetails;
