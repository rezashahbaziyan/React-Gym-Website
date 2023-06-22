import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Join from './Components/Join/Join';
import Plans from './Components/Plans/Plans';
import Reasons from './Components/Reasons/Reasons';
import Testimonials from './Components/Testimonials/Testimonials';
import Programs from './Components/programs/Programs';

import './App.css';
import Footer from './Components/Footer/Footer';

function App() {ion App() {ion App() {
  return (
    <div className="App">
      {/* <span style={{color: 'white'}}></span> */}
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}
export default App;
