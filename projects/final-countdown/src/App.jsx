import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetT={1}/>
        <TimerChallenge title="Med" targetT={2}/>
        <TimerChallenge title="Hard" targetT={5}/>
        <TimerChallenge title="Pro" targetT={10}/>
      </div>
    </>
  );
}

export default App;
