import Home from './Pages/Home';
import './App.css';
import Header from './components/Header'
import { toAbsoluteUrl } from './_helpers/utils';
import Hero from './components/Hero'

function App() {
  const imageUrl = toAbsoluteUrl('/Assets/images/universe4.jpg');
  return (
    <div className="App">
      <Header/>
      <Hero imageUrl={imageUrl} />
      <Home/>
    </div>
  );
}

export default App;
