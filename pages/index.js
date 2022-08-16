import { Player } from 'tone';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const player = new Player('/audio/iceBass.m4a').toDestination();
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
      <button className="btn btn-danger btn-lg copy-btn" type="button" onClick={() => player.start()}>
        Start Player
      </button>
    </div>
  );
}

export default Home;
