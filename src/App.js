import './App.css';
import Hero from './Components/Hero/Hero';
import Reasons from './Components/Reasons/Reasons';
import Programs from './Components/programs/Programs';
function App() {
  return (
    <div className="App">
      {/* <span style={{color: 'white'}}></span> */}
      <Hero />
      <Programs />
      <Reasons />
    </div>
  );
}
export default App;
