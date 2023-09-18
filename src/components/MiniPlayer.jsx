import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import classes from '../styles/MiniPlayer.module.css';

function MiniPlayer({ title, id }) {
  const miniPlayerRef = useRef();
  const [status, setStatus] = useState(false);

  const videoURL = `https://www.youtube.com/watch?v=${id}`;

  function toggleMiniPlayer() {
    if (!status) {
      miniPlayerRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      miniPlayerRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }

  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={miniPlayerRef}
      onClick={toggleMiniPlayer}
    >
      <span className={`${classes.open} material-icons-outlined`}>
        play_circle_filled
      </span>
      <span
        className={`${classes.close} material-icons-outlined`}
        onClick={toggleMiniPlayer}
      >
        close
      </span>
      <ReactPlayer
        className={classes.player}
        url={videoURL}
        width="300px"
        height="168px"
        playing={status}
        controls
      />
      <p>{title}</p>
    </div>
  );
}

export default MiniPlayer;
