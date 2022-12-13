// Components

import ButtonBack from './Components/ButtonBack';
import ButtonNext from './Components/ButtonNext';

// CSS
import './App.css';

function App() {

  const getCordenates = (e) => {
    console.log(e)
  }

  return (
    <div className = 'container' onClick={getCordenates}>
      <ButtonBack/>
      <ButtonNext/>
    </div>
  );
}

export default App;
