import React from 'react';

const SingleWorkFlow = (props) => {
  let start = `start-${props.index}`;
  let end = `end-${props.index}`;

  return (
    <tr>
      <td>
        <input
          type='text'
          className='form-control'
          name='start'
          value={props.param.start}
          id={start}
          data-id={props.index}
          onChange={(event) => props.handleChange(event)}
        />
      </td>
      <td>
        <input
          type='text'
          className='form-control'
          name='end'
          id={end}
          value={props.param.end}
          data-id={props.index}
          onChange={(event) => props.handleChange(event)}
        />
      </td>
      <td>
        <button
          className='btn btn-primary'
          onClick={() => props.handleDelete(props.param.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleWorkFlow;
