export default function JobItemContent() {
  return (
    <section className="job-details">
      <div>
        <img
          src="https://images.unsplash.com/photo-1610374792793-f016b77ca51a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1272&q=100"
          alt="#"
        />
        <a
          className="apply-btn"
          href="https://fictionalprincipalfinancewebsite.com"
          target="_blank"
        >
          Apply
        </a>
        <section className="job-info">
          <div className="job-info__left">
            <div className="job-info__badge">PF</div>
            <div className="job-info__below-badge">
              <time className="job-info__time">2d</time>
            </div>
          </div>

          <div className="job-info__right">
            <h2 className="second-heading">Full Stack Developer</h2>
            <p className="job-info__company">Principal Finance</p>
            <p className="job-info__description">
              Are you an experienced, passionate pioneer in technology - a
              solutions builder, a roll-up-your-sleeves technologist who wants a
              daily collaborative environment, think-tank feel?
            </p>
            <div className="job-info__extras">
              <p className="job-info__extra">
                <i className="fa-solid fa-clock job-info__extra-icon"></i>
                Full-Time
              </p>
              <p className="job-info__extra">
                <i className="fa-solid fa-money-bill job-info__extra-icon"></i>
                $95,000+
              </p>
              <p className="job-info__extra">
                <i className="fa-solid fa-location-dot job-info__extra-icon"></i>{" "}
                Global
              </p>
            </div>
          </div>
        </section>
        <div className="job-details__other">
          <section className="qualifications">
            <div className="qualifications__left">
              <h4 className="fourth-heading">Qualifications</h4>
              <p className="qualifications__sub-text">
                Other qualifications may apply
              </p>
            </div>
            <ul className="qualifications__list"></ul>
          </section>

          <section className="reviews">
            <div className="reviews__left">
              <h4 className="fourth-heading">Company reviews</h4>
              <p className="reviews__sub-text">
                Recent things people are saying
              </p>
            </div>
            <ul className="reviews__list"></ul>
          </section>
        </div>
        <footer className="job-details__footer">
          <p className="job-details__footer-text">
            If possible, please reference that you found the job on{" "}
            <span className="u-bold">rmtDev</span>, we would really appreciate
            it!
          </p>
        </footer>
      </div>
    </section>
  );
}
