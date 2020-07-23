import React from 'react';

const SingleETLTargert = (props) => {
  let value = `value-${props.index}`;
  let attribute = `attribute-${props.index}`;

  return (
    <tr>
      <td>
        <input
          type='text'
          className='form-control'
          name='value'
          value={props.param.value}
          id={value}
          data-id={props.index}
          onChange={(event) => props.handleChange(event)}
        />
      </td>
      <td>
        <input
          type='text'
          className='form-control'
          name='attribute'
          id={attribute}
          value={props.param.attribute}
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

export default SingleETLTargert;
