import { Player } from 'tone';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const playerBass = new Player('/audio/iceBass.m4a').toDestination();
  playerBass.autostart = false;
  playerBass.loop = true;
  const playerLead = new Player('/audio/iceLead.m4a').toDestination();
  playerLead.autostart = false;
  playerLead.loop = true;
  const playerRhythm = new Player('/audio/iceRhythm.m4a').toDestination();
  playerRhythm.autostart = false;
  playerRhythm.loop = true;

  const numberToDb = (number) => ((number * 0.6) - 60);

  function playAll() {
    playerBass.start();
    playerLead.start();
    playerRhythm.start();
  }

  const volume1 = () => {
    const slider = document.getElementById('myRange1');
    playerBass.volume.value = numberToDb(slider.value);
  };

  const volume2 = () => {
    const slider = document.getElementById('myRange2');
    playerLead.volume.value = numberToDb(slider.value);
  };

  const volume3 = () => {
    const slider = document.getElementById('myRange3');
    playerRhythm.volume.value = numberToDb(slider.value);
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
      <input type="range" min="1" max="100" value="100" className="slider" id="myRange1" onChange={() => volume1()} />
      <hr />
      <input type="range" min="1" max="100" value="100" className="slider" id="myRange2" onChange={() => volume2()} />
      <hr />
      <input type="range" min="1" max="100" value="100" className="slider" id="myRange3" onChange={() => volume3()} />
    </div>
  );
}

export default Home;
