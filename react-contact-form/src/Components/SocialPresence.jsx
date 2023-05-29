const SocialPresence = () => {
  return (
    <section className='row box-section'>
      <div className='col-12 addDetail'>
        <h5>Social Presence</h5>
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='linkedin'>
          {" "}
          Linkedin<span>( Url ) </span>{" "}
        </label>
        <input
          type='url'
          required
          placeholder='https://www.linkedin.com/in/..'
          name='linkedin'
          id='linkedin'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='instagram'>
          {" "}
          Instagram<span>( Url ) </span>{" "}
        </label>
        <input
          type='url'
          required
          placeholder='https://www.instagram.com/..'
          name='instagram'
          id='instagram'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='twitter'>
          {" "}
          twitter<span>( Url ) </span>{" "}
        </label>
        <input
          type='url'
          placeholder='https://www.twitter.com/..'
          name='twitter'
          id='twitter'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='facebook'>
          {" "}
          Facebook<span>( Url ) </span>{" "}
        </label>
        <input
          type='url'
          placeholder='https://www.facebook.com/people/..'
          name='facebook'
          id='facebook'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='medium'>
          {" "}
          Medium<span>( Url ) </span>{" "}
        </label>
        <input
          type='url'
          placeholder='https://www.user.medium.com/'
          name='medium'
          id='medium'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='github'>
          {" "}
          Github<span>( Url ) </span>{" "}
        </label>
        <input
          type='url'
          placeholder='https://www.github.com/..'
          name='github'
          id='github'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='hackerrank'>
          {" "}
          Hackerrank<span>( Url ) </span>{" "}
        </label>
        <input
          type='url'
          placeholder='https://www.hackerrank.com/..'
          name='hackerrank'
          id='hackerrank'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='codeforces'>
          {" "}
          Codeforces<span>( Url ) </span>{" "}
        </label>
        <input
          type='url'
          placeholder='https://codeforces.com/profile/..'
          name='codeforces'
          id='codeforces'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='codechef'>
          {" "}
          Codechef<span>( Url ) </span>{" "}
        </label>
        <input
          type='url'
          placeholder='https://www.codechef.com/user/..'
          name='codechef'
          id='codechef'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='atcoder'>
          {" "}
          Atcoder<span>( Url ) </span>{" "}
        </label>
        <input
          type='url'
          placeholder='https://atcoder.jp/users/..'
          name='atcoder'
          id='atcoder'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='stopstalk'>
          {" "}
          stopstalk<span>( Url ) </span>{" "}
        </label>
        <input
          type='url'
          placeholder='https://www.stopstalk.com/user/profile/..'
          name='stopstalk'
          id='stopstalk'
        />
      </div>

      <div className='col-12 inputStyle col-md-6'>
        <label htmlFor='portfolio'>
          {" "}
          Personal portfolio<span>( Url ) </span>{" "}
        </label>
        <input
          type='url'
          placeholder='eg: https://portfolio.user.me'
          name='portfolio'
          id='portfolio'
        />
      </div>
    </section>
  );
};

export default SocialPresence;
