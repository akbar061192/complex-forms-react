import React, { useContext } from 'react';
import { LayoutContext } from '../../context/LayoutContext';

const LayoutMain = () => {
  const {
    clientName,
    emails,
    layoutName,
    setClientName,
    setEmails,
    setLayoutName,
    handleSubmit,
  } = useContext(LayoutContext);

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mx-auto m-5'>
            <h4 className='mb-4'>Request Level Parameters</h4>
            <form onSubmit={handleSubmit}>
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
              <button
                className='btn btn-primary mx-auto text-center'
                type='submit'
              >
                click
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutMain;
