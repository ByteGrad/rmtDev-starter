import { BookmarkFilledIcon } from "@radix-ui/react-icons";

export default function JobListItem() {
  return (
    <li className="job-item">
      <a className="job-item__link">
        <div className="job-item__badge">PF</div>

        <div className="job-item__middle">
          <h3 className="third-heading">Full Stack Developer</h3>
          <p className="job-item__company">Principal Finance</p>
          <div className="job-item__extras">
            <p className="job-item__extra">
              <i className="fa-solid fa-clock job-item__extra-icon"></i>
              Full-Time
            </p>
            <p className="job-item__extra">
              <i className="fa-solid fa-money-bill job-item__extra-icon"></i>
              $80,000+
            </p>
            <p className="job-item__extra">
              <i className="fa-solid fa-location-dot job-item__extra-icon"></i>{" "}
              Global
            </p>
          </div>
        </div>

        <div className="job-item__right">
          <BookmarkFilledIcon />
          <time className="job-item__time">2d</time>
        </div>
      </a>
    </li>
  );
}
