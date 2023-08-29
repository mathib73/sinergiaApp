import landing from './landing.png';
import './App.css';

const mailTo = (e) => {
  window.location.href = "mailto:contacto@dogtechdog.com";
  e.preventDefault();
}
function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="contact" onClick={mailTo}/>
        <div className="container responsive" />
      </div>
    </div>
  );
}

export default App;
