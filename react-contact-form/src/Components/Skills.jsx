const Skills = () => {
  return (
    <section className='row box-section'>
      <div className='col-12 addDetail'>
        <h5>Skills</h5>
      </div>

      <div className='col-12' id='skillSec'>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 inputStyle'>
            <label htmlFor='titleCer'> Skills </label>
            <textarea
              name='titleCer'
              className=''
              rows='1'
              required
              placeholder='Please write skill separated by commas: HTML , CSS , JavaScript , Java'></textarea>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
