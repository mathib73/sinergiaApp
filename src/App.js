import landing from './landing.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="container responsive">
          <img src={landing} className="landing" alt="landing" />
        </div>
      </div>
    </div>
  );
}

export default App;
