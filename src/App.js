import Home from './Pages/Home';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero'; 

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Home/>
    </div>
  );
}

export default App;
