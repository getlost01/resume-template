const AboutYou = () => {
  return (
    <section className='row box-section'>
      <div className='col-12 addDetail'>
        <h5>About you</h5>
      </div>

      <div className='col-12 inputStyle'>
        <label htmlFor='bio'>
          {" "}
          Short Bio<span>*</span>{" "}
        </label>
        <input type='text' placeholder='I am a full stack web development enthusiasm.' name='bio' required id='bio'
        />
      </div>

      <div className='col-12 inputStyle'>
        <label htmlFor='brief'>
          {" "}
          Breif introduction<span>*</span>{" "}
        </label>
        <textarea name='brief' className='' rows='1' required placeholder='i) Get 1 rank in 4th sem ii) Win hackathon in college.'></textarea>
      </div>
    </section>
  );
};

export default AboutYou;
