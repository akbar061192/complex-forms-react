import React, { useContext } from 'react';
import { LayoutContext } from '../../context/LayoutContext';

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
              <h4 className='mb-4 text-center'>Source Details</h4>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SourceDetails;
