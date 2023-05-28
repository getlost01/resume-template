const OtherInfo = () => {
  return (
    <>
      <section className='row box-section'>
        <div className='col-12 addDetail'>
          <h5>Working experience / volunteer</h5>
          <div className='btnAdd' id='addExp'>
            {" "}
            <i className='fa-solid fa-plus'></i> Add{" "}
          </div>
        </div>

        <div className='col-12' id='expSec'></div>
      </section>

      <section className='row box-section'>
        <div className='col-12 addDetail'>
          <h5>Projects</h5>
          <div className='btnAdd' id='addPro'>
            {" "}
            <i className='fa-solid fa-plus'></i> Add{" "}
          </div>
        </div>

        <div className='col-12' id='projectSec'></div>
      </section>

      <section className='row box-section'>
        <div className='col-12 addDetail'>
          <h5>Certificates</h5>
          <div className='btnAdd' id='addCer'>
            {" "}
            <i className='fa-solid fa-plus'></i> Add{" "}
          </div>
        </div>

        <div className='col-12' id='certifySec'></div>
      </section>

      <section className='row box-section'>
        <div className='col-12 addDetail'>
          <h5>Achievements / Honors</h5>
          <div className='btnAdd' id='addHon'>
            {" "}
            <i className='fa-solid fa-plus'></i> Add{" "}
          </div>
        </div>

        <div className='col-12' id='honorSec'></div>
      </section>

      <section className='row box-section'>
        <div className='col-12 addDetail'>
          <h5>Other Info</h5>
          <div className='btnAdd' id='addInfo'>
            {" "}
            <i className='fa-solid fa-plus'></i> Add{" "}
          </div>
        </div>

        <div className='col-12' id='infoSec'></div>
      </section>
    </>
  );
};

export default OtherInfo;
