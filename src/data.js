const data = {
  clientname: 'MMI_RR_JSON_MAR@',
  emails: 'rrnandyal',
  layoutname: 'DAQE_Layout_RR_MAR_@',
  layoutinfo: {
    tables: {
      problem_list: {
        sourcedetails: {
          sourcetype: 'TXT',
          sourceconnection: 'problem_list_RR.txt.gz',
        },
        cdc: {
          cdctargettablename: 'intg_us9_mmi.problem_list_02',
          cdcprimarykeycols: 'problem_list_id,patient_id',
          cdchistorypartitioncols: 'problem_list_id',
          cdcfilter: 'visit_id',
          cdctype: 'Full',
          cdcpartialcurrentperiod: '2020',
          cdcpartiallookback: '5',
        },
        uniquecols: 'patient_id,patient_id',
        cols: [
          {
            maxlength: 50,
            datatype: 'String',
            columnname: 'status',
            exceptedvalues: 'ACTIVE,INACTIVE,CHRONIC,RESOLVED,ABORTED',
          },
        ],
      },
    },
    processingparameters: [
      {
        value: 'intg_us9_mmi_batch',
        attribute: 'HiveOutPutSchema',
      },
    ],
    configparameters: {
      spark: {
        principal: '',
        jarlocation: '/integration/us9/apps/mmi/dqe/',
        driver_memory: '4G',
        executor_memory: '8G',
        executor_cores: '4',
        num_executors: '4',
        spark_sql_shuffle_partitions: '1000',
        spark_default_parallelism: '4',
        spark_yarn_queue: 'adhoc',
        spark_yarn_submit_waitappcompletion: 'false',
      },
      watcher: {
        schedule: '1/2 * * * *',
        options: {
          hadoopstagingpath: '/integration/us9/data/mmi/RR_JSON_MAR/staging/',
          hadoopinvalidpath: '/integration/us9/data/mmi/RR_JSON_MAR/invalid/',
          hadoopprocessedpath:
            '/integration/us9/data/mmi/RR_JSON_MAR/processed/',
          hadoopuser: 'us9immi',
          ftpuser: 'root',
          options: '',
          ftppassword: 'test123',
          ftphost: '10.91.192.139',
          ftppath: '/data/intg/JSON_RR',
          triggerfileextension: '',
          filenamedelimiter: '',
          groupfilecount: '',
          negate: '',
        },
      },
      workflow: [
        {
          start: 'FileWatcher',
          end: 'FileProcessorPickup',
        },
      ],
      airflow: {
        emailreportpath: '/tmp/',
        deletedagpath: '/api/experimental/dags/delete_dag/dag_runs',
        restapihost: 'http://10.91.224.120:5000',
        restapipath: '/api/dags',
        experimentalrestapihost: 'http://10.91.224.120:8080',
      },
      sourcedetails: [
        {
          value: '',
          attribute: '',
        },
      ],
      etltarget: [
        {
          value: '',
          attribute: '',
        },
      ],
    },
  },
};
