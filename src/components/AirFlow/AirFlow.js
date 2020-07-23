import React, { useContext } from 'react';
import { LayoutContext } from '../../context/LayoutContext';
import { Link } from 'react-router-dom';

const AirFlow = () => {
  const { airflow, setAirFlow } = useContext(LayoutContext);

  const {
    emailreportpath,
    deletedagpath,
    restapihost,
    restapipath,
    experimentalrestapihost,
  } = airflow;

  const airflowHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAirFlow((prevState) => {
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
              <h4 className='mb-4 text-center'>AirFlow Parameters</h4>
              <form>
                <div className='form-group'>
                  <label htmlFor='emailreportpath'>Email Report Path</label>
                  <input
                    type='text'
                    className='form-control'
                    name='emailreportpath'
                    value={emailreportpath}
                    onChange={airflowHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='deletedagpath'>Delete DAG Path</label>
                  <input
                    type='text'
                    className='form-control'
                    name='deletedagpath'
                    value={deletedagpath}
                    onChange={airflowHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='restapihost'>Rest API Host</label>
                  <input
                    type='text'
                    className='form-control'
                    name='restapihost'
                    value={restapihost}
                    onChange={airflowHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='restapipath'>Rest API Path</label>
                  <input
                    type='text'
                    className='form-control'
                    name='restapipath'
                    value={restapipath}
                    onChange={airflowHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='experimentalrestapihost'>
                    Experimental Rest API Host
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='experimentalrestapihost'
                    value={experimentalrestapihost}
                    onChange={airflowHandleChange}
                  />
                </div>
              </form>
              <div className=' d-flex justify-content-between '>
                <Link to='/workflow'>
                  <button type='button' className='btn btn-dark my-4'>
                    Back
                  </button>
                </Link>
                <Link to='/source-details-list'>
                  <button type='button' className='btn btn-dark my-4'>
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

export default AirFlow;
