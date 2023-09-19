import { useMemo } from 'react';
import SuccessImg from '../assets/images/success.png';
import useFetch from '../hooks/useFetch';
import classes from '../styles/Summary.module.css';

export default function Summary({ score, noq }) {
  const getKeyword = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return 'dankey';
    } else if ((score / (noq * 5)) * 100 < 75) {
      return 'cheetah';
    } else if ((score / (noq * 5)) * 100 < 100) {
      return 'tiger';
    } else {
      return 'lion';
    }
  }, [score, noq]);

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
    'GET',
    {
      Authorization: import.meta.env.VITE_PEXELS_API_KEY,
    },
  );

  const image = result ? result.photos[0].src.medium : SuccessImg;

  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        {/* <!-- progress bar will be placed here --> */}
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      {loading && <div className={classes.badge}>Loading your badge...</div>}
      {loading && <div className={classes.badge}>Error loading!</div>}

      {!loading && !error && (
        <div className={classes.badge}>
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  );
}
