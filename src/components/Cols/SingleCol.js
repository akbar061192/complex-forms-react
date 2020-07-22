import React from 'react';

const SingleCol = (props) => {
  const { maxlength, datatype, columnname, exceptedvalues } = props.col;
  let maxVal = `maxlength-${props.index}`;
  let dataVal = `datatype-${props.index}`;
  let colVal = `columnname-${props.index}`;
  let expVal = `expectedvalues-${props.index}`;

  return (
    <tr>
      <td>
        <input
          type='text'
          className='form-control'
          name='maxlength'
          value={maxlength}
          id={maxVal}
          data-id={props.index}
          onChange={(event) => props.handleChangeCols(event)}
        />
      </td>
      <td>
        <input
          type='text'
          className='form-control'
          name='datatype'
          id={dataVal}
          value={datatype}
          data-id={props.index}
          onChange={(event) => props.handleChangeCols(event)}
        />
      </td>
      <td>
        <input
          type='text'
          className='form-control'
          name='columnname'
          id={colVal}
          value={columnname}
          data-id={props.index}
          onChange={(event) => props.handleChangeCols(event)}
        />
      </td>
      <td>
        <input
          type='text'
          className='form-control'
          name='exceptedvalues'
          id={expVal}
          value={exceptedvalues}
          data-id={props.index}
          onChange={(event) => props.handleChangeCols(event)}
        />
      </td>
      <td>
        <button
          className='btn btn-primary'
          onClick={() => props.handleDeleteCols(props.col.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleCol;
