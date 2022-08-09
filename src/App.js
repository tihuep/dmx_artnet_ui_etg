import './App.css';
import Slider from './Slider'

function App() {
  return (
    <div>
      <Slider fixture="spotlight" attribute="brightness"/>
      <br></br>
      <Slider fixture="spotlight" attribute="temp"/>
    </div>
  );
}

export default App;
