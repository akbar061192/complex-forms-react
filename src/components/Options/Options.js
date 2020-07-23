import React, { useContext } from 'react';
import { LayoutContext } from '../../context/LayoutContext';

const Options = () => {
  const { schedule, setSchedule, optionsVal, setOptionsVal } = useContext(
    LayoutContext
  );

  const {
    hadoopstagingpath,
    hadoopinvalidpath,
    hadoopprocessedpath,
    hadoopuser,
    ftpuser,
    options,
    ftppassword,
    ftphost,
    ftppath,
    triggerfileextension,
    filenamedelimiter,
    groupfilecount,
    negate,
  } = optionsVal;

  const optionsHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setOptionsVal((prevstate) => {
      return {
        ...prevstate,
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
              <h4 className='mb-4 text-center'>Option Parameters</h4>
              <form>
                <div className='form-group'>
                  <label htmlFor='schedule'>Schedule</label>
                  <input
                    type='text'
                    className='form-control'
                    name='schedule'
                    value={schedule}
                    onChange={(event) => setSchedule(event.target.value)}
                  />
                </div>
                <hr />
                <div className='form-group'>
                  <label htmlFor='hadoopstagingpath'>Staging Path</label>
                  <input
                    type='text'
                    className='form-control'
                    name='hadoopstagingpath'
                    value={hadoopstagingpath}
                    onChange={optionsHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='hadoopinvalidpath'>Invalid Path</label>
                  <input
                    type='text'
                    className='form-control'
                    name='hadoopinvalidpath'
                    value={hadoopinvalidpath}
                    onChange={optionsHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='hadoopprocessedpath'>Processed Path</label>
                  <input
                    type='text'
                    className='form-control'
                    name='hadoopprocessedpath'
                    value={hadoopprocessedpath}
                    onChange={optionsHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='hadoopuser'>User</label>
                  <input
                    type='text'
                    className='form-control'
                    name='hadoopuser'
                    value={hadoopuser}
                    onChange={optionsHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='ftpuser'>FTP User</label>
                  <input
                    type='text'
                    className='form-control'
                    name='ftpuser'
                    value={ftpuser}
                    onChange={optionsHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='options'>Options</label>
                  <input
                    type='text'
                    className='form-control'
                    name='options'
                    value={options}
                    onChange={optionsHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='ftppassword'>FTP Password</label>
                  <input
                    type='text'
                    className='form-control'
                    name='ftppassword'
                    value={ftppassword}
                    onChange={optionsHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='ftphost'>FTP Host</label>
                  <input
                    type='text'
                    className='form-control'
                    name='ftphost'
                    value={ftphost}
                    onChange={optionsHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='ftppath'>FTP Path</label>
                  <input
                    type='text'
                    className='form-control'
                    name='ftppath'
                    value={ftppath}
                    onChange={optionsHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='triggerfileextension'>
                    Trigger File Extension
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='triggerfileextension'
                    value={triggerfileextension}
                    onChange={optionsHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='filenamedelimiter'>File Name Delimiter</label>
                  <input
                    type='text'
                    className='form-control'
                    name='filenamedelimiter'
                    value={filenamedelimiter}
                    onChange={optionsHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='groupfilecount'>Group File Counr</label>
                  <input
                    type='text'
                    className='form-control'
                    name='groupfilecount'
                    value={groupfilecount}
                    onChange={optionsHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='negate'>Negate</label>
                  <input
                    type='text'
                    className='form-control'
                    name='negate'
                    value={negate}
                    onChange={optionsHandleChange}
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

export default Options;
