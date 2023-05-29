const BasicDetail = () => {
  return (
    <section className='row box-section'>
      <div className='col-12 addDetail'>
        <h5>Basic Details</h5>
      </div>
      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='name'>
          {" "}
          Name<span>*</span>{" "}
        </label>
        <input
          type='text'
          placeholder='Enter your name'
          name='name'
          required
          id='name'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='email'>
          {" "}
          Email<span>*</span>{" "}
        </label>
        <input
          type='email'
          placeholder='Enter Email'
          name='email'
          required
          id='email'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='photo'>
          {" "}
          Your photo<span>*</span>{" "}
        </label>
        <input
          type='url'
          placeholder='https://image.com/664c5'
          name='photo'
          required
          id='photo'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='address'>
          {" "}
          Your home address<span>*</span>{" "}
        </label>
        <input
          type='text'
          placeholder='12/10 civil lines'
          name='address'
          required
          id='address'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='city'>
          {" "}
          Home city<span>*</span>{" "}
        </label>
        <input
          type='text'
          placeholder='Kanpur'
          name='city'
          required
          id='city'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='mobile'>
          {" "}
          Your mobile no.<span>*</span>{" "}
        </label>
        <input
          type='tel'
          placeholder='930xxxxxxx'
          name='mobile'
          required
          id='mobile'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='dob'>
          {" "}
          Date of Birth<span>*</span>{" "}
        </label>
        <input type='date' value='2002-01-01' name='dob' required id='dob' />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='resume'>
          {" "}
          Your resume<span>*</span>{" "}
        </label>
        <input
          type='url'
          placeholder='https://image.com/664c5'
          name='resume'
          required
          id='resume'
        />
      </div>
    </section>
  );
};

export default BasicDetail;
