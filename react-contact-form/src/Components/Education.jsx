const Education = () => {
  return (
    <section className='row box-section'>
      <div className='col-12 addDetail'>
        <h5>Education</h5>
      </div>

      <div className='titleBox'>
        <h6>Graduation college details</h6>
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='college'>
          {" "}
          College Name<span>*</span>{" "}
        </label>
        <input
          type='text'
          placeholder='UIET Kanpur'
          value='UIET CSJM University Kanpur'
          name='college'
          required
          id='college'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='course'>
          {" "}
          Course Name<span>*</span>{" "}
        </label>
        <input
          type='text'
          placeholder='B-Tech - C.S.E'
          name='course'
          required
          id='course'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='passingYear'>
          {" "}
          Year of completion<span>*</span>{" "}
        </label>
        <input
          type='date'
          value='2024-06-01'
          name='passingYear'
          required
          id='passingYear'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='rollno'>
          {" "}
          Roll Number<span>*</span>{" "}
        </label>
        <input
          type='text'
          placeholder='eg: 001'
          name='rollno'
          required
          id='rollno'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='cgpi'>
          {" "}
          Latest cgpi<span>*</span>{" "}
        </label>
        <input type='text' placeholder='8.76' name='cgpi' required id='cgpi' />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='achievements'>
          {" "}
          Achievements<span>( if any )</span>{" "}
        </label>
        <textarea
          name='achievements'
          className=''
          rows='1'
          placeholder='i) Get 1 rank in 4th sem ii) Win hackathon in college.'></textarea>
      </div>

      <div className='titleBox'>
        <h6>High school details</h6>
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='school'>
          {" "}
          School Name<span>*</span>{" "}
        </label>
        <input
          type='text'
          placeholder='DPS School'
          name='school'
          required
          id='school'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='courseS'>
          {" "}
          12th Course field<span>*</span>{" "}
        </label>
        <input
          type='text'
          placeholder='PCM'
          name='courseS'
          required
          id='courseS'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='passingYearS'>
          {" "}
          Year of completion<span>*</span>{" "}
        </label>
        <input
          type='date'
          value='2019-06-01'
          name='passingYearS'
          required
          id='passingYearS'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='cgpiS'>
          {" "}
          Cgpa / Per<span>*</span>{" "}
        </label>
        <input
          type='text'
          placeholder='8.76 / 87.6%'
          name='cgpiS'
          required
          id='cgpiS'
        />
      </div>
    </section>
  );
};

export default Education;
