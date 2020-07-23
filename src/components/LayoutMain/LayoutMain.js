import React, { useContext } from 'react';
import { LayoutContext } from '../../context/LayoutContext';
import { Link } from 'react-router-dom';

const LayoutMain = () => {
  const {
    clientName,
    emails,
    layoutName,
    setClientName,
    setEmails,
    setLayoutName,
  } = useContext(LayoutContext);

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mx-auto m-5'>
            <h4 className='mb-3 text-center'>Main Parameters</h4>
            <form>
              <div className='form-group'>
                <label htmlFor='clientname'>Client Name</label>
                <input
                  type='text'
                  className='form-control'
                  name='clientname'
                  value={clientName}
                  onChange={(event) => setClientName(event.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='emails'>Emails</label>
                <input
                  type='text'
                  className='form-control'
                  name='emails'
                  value={emails}
                  onChange={(event) => setEmails(event.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='layoutname'>Layout Name</label>
                <input
                  type='text'
                  className='form-control'
                  name='layoutName'
                  value={layoutName}
                  onChange={(event) => setLayoutName(event.target.value)}
                />
              </div>
            </form>
            <div className=' d-flex justify-content-end '>
              <Link to='/source-details'>
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

export default LayoutMain;
