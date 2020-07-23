import React, { useContext } from 'react';
import { LayoutContext } from '../../context/LayoutContext';
import { Link } from 'react-router-dom';

const FormSubmit = () => {
  const { handleSubmit } = useContext(LayoutContext);
  return (
    <div className='container'>
      <div className='row mx-auto'>
        <div className='col-md-12 mx-auto'>
          <button
            className='btn btn-primary btn-lg mx-auto my-5 text-center'
            type='submit'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        <div className=' d-flex justify-content-between '>
          <Link to='/etl-targets'>
            <button type='button' className='btn btn-dark my-4'>
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormSubmit;
