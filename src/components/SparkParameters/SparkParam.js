import React, { useContext } from 'react';
import { LayoutContext } from '../../context/LayoutContext';
import { Link } from 'react-router-dom';

const SparkParam = () => {
  const { spark, setSpark } = useContext(LayoutContext);
  const {
    principal,
    jarlocation,
    driver_memory,
    executor_memory,
    executor_cores,
    num_executors,
    spark_sql_shuffle_partitions,
    spark_default_parallelism,
    spark_yarn_queue,
    spark_yarn_submit_waitappcompletion,
  } = spark;

  const sparkHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSpark((prevState) => {
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
            <div className='col-md-12 mx-auto mt-5'>
              <h4 className='mb-3 text-center'>Spark Parameters</h4>
            </div>
            <div className='col-md-6 mx-auto'>
              <form>
                <div className='form-group'>
                  <label htmlFor='principal'>Principal</label>
                  <input
                    type='text'
                    className='form-control'
                    name='principal'
                    value={principal}
                    onChange={sparkHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='jarlocation'>Jar Location</label>
                  <input
                    type='text'
                    className='form-control'
                    name='jarlocation'
                    value={jarlocation}
                    onChange={sparkHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='driver_memory'>Driver Memory</label>
                  <input
                    type='text'
                    className='form-control'
                    name='driver_memory'
                    value={driver_memory}
                    onChange={sparkHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='executor_memory'>Executor Memory</label>
                  <input
                    type='text'
                    className='form-control'
                    name='executor_memory'
                    value={executor_memory}
                    onChange={sparkHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='executor_cores'>Executor Cores</label>
                  <input
                    type='text'
                    className='form-control'
                    name='executor_cores'
                    value={executor_cores}
                    onChange={sparkHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='num_executors'>Num Executors</label>
                  <input
                    type='text'
                    className='form-control'
                    name='num_executors'
                    value={num_executors}
                    onChange={sparkHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='spark_sql_shuffle_partitions'>
                    Shuffle Partitions
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='spark_sql_shuffle_partitions'
                    value={spark_sql_shuffle_partitions}
                    onChange={sparkHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='spark_default_parallelism'>
                    Default Parallelism
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='spark_default_parallelism'
                    value={spark_default_parallelism}
                    onChange={sparkHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='spark_yarn_queue'>Yarn Queue</label>
                  <input
                    type='text'
                    className='form-control'
                    name='spark_yarn_queue'
                    value={spark_yarn_queue}
                    onChange={sparkHandleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='spark_yarn_submit_waitappcompletion'>
                    Yarn Submit
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='spark_yarn_submit_waitappcompletion'
                    value={spark_yarn_submit_waitappcompletion}
                    onChange={sparkHandleChange}
                  />
                </div>
              </form>
              <div className=' d-flex justify-content-between '>
                <Link to='/processing-params'>
                  <button type='button' className='btn btn-dark my-4'>
                    Back
                  </button>
                </Link>
                <Link to='/options'>
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

export default SparkParam;
