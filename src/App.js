import './App.css';
import Slider from './Slider'

function App() {
  return (
    <div>
      <h1>Scheinwerfer:</h1>
      <ul>
        <li><Slider fixture="spotlight" attribute="brightness" name="Scheinwerfer Helligkeit"/></li>
        <li><Slider fixture="spotlight" attribute="temp" name="Scheinwerfer Temperatur"/></li>
      </ul>
      <h1>Fluter:</h1>
      <ul>
        <li><Slider fixture="wash" attribute="cw" name="Fluter Kaltweiss"/></li>
        <li><Slider fixture="wash" attribute="ww" name="Fluter Warmweiss"/></li>
      </ul>
      <h1>Farbe Gross:</h1>
      <ul>
        <li><Slider fixture="colorbig" attribute="brightness" name="Farbe Gross Helligkeit"/></li>
        <li><Slider fixture="colorbig" attribute="red" name="Farbe Gross Rot"/></li>
        <li><Slider fixture="colorbig" attribute="green" name="Farbe Gross Grün"/></li>
        <li><Slider fixture="colorbig" attribute="blue" name="Farbe Gross Blau"/></li>
        <li><Slider fixture="colorbig" attribute="white" name="Farbe Gross Weiss"/></li>
      </ul>
      <h1>Farbe Klein:</h1>
      <ul>
        <li><Slider fixture="colorsmall" attribute="brightness" name="Farbe Klein Helligkeit"/></li>
        <li><Slider fixture="colorsmall" attribute="red" name="Farbe Klein Rot"/></li>
        <li><Slider fixture="colorsmall" attribute="green" name="Farbe Klein Grün"/></li>
        <li><Slider fixture="colorsmall" attribute="blue" name="Farbe Klein Blau"/></li>
        <li><Slider fixture="colorsmall" attribute="white" name="Farbe Klein Weiss"/></li>
      </ul>      
    </div>
  );
}

export default App;
