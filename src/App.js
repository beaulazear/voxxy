import './App.css';
import HeroComponent from './components/HeroComponent';
import Navbar from './components/Navbar';
import InfoBoxes from './components/InfoBoxes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroComponent />
      <InfoBoxes />
    </div>
  );
}

export default App;
