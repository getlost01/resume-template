const Submit = () => {
  return (
    <div className='row'>
      <div className='col-12 d-flex my-1 justify-content-center'>
        <input className='mx-1' type='checkbox' name='okcheck' id='okcheck' />I
        have reviewed all details and I want to submit
      </div>
      <div className='colo-12 d-flex justify-content-center'>
        <input type='submit' value='Submit' id='submitBTN' />
      </div>
    </div>
  );
};

export default Submit;
