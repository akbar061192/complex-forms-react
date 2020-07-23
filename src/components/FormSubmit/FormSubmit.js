import React, { useContext } from 'react';
import { LayoutContext } from '../../context/LayoutContext';

const FormSubmit = () => {
  const { handleSubmit } = useContext(LayoutContext);
  return (
    <div className='container'>
      <div className='row mx-auto'>
        <div className='col-md-12 mx-auto'></div>
        <button
          className='btn btn-primary btn-lg mx-auto my-5 text-center'
          type='submit'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormSubmit;
