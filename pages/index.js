import * as Tone from 'tone';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const playerBass = new Tone.Player('/audio/iceBass.m4a').toDestination();
  playerBass.autostart = false;
  playerBass.loop = true;
  const playerLead = new Tone.Player('/audio/iceLead.m4a').toDestination();
  playerLead.autostart = false;
  playerLead.loop = true;
  const playerRhythm = new Tone.Player('/audio/iceRhythm.m4a').toDestination();
  playerRhythm.autostart = false;
  playerRhythm.loop = true;

  // const numberToDb = (number) => ((number * 0.6) - 60);

  function playAll() {
    playerBass.start();
    playerLead.start();
    playerRhythm.start();
  }

  const makeBassQuieter = () => {
    if (playerBass.volume.value > -55) {
      playerBass.volume.value -= 5;
    }
  };

  const makeBassLouder = () => {
    if (playerBass.volume.value < 0) {
      playerBass.volume.value += 5;
    }
  };

  const { user } = useAuth();

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.displayName}! </h1>
      <button className="btn btn-danger btn-lg copy-btn" type="button" onClick={() => playAll()}>
        Start Player
      </button>
      <hr />
      <button className="btn btn-danger btn-lg copy-btn" type="button" onClick={() => makeBassQuieter()}>
        Make bass quieter
      </button>
      <hr />
      <button className="btn btn-danger btn-lg copy-btn" type="button" onClick={() => makeBassLouder()}>
        Make bass louder
      </button>
      <hr />
    </div>
  );
}

export default Home;
