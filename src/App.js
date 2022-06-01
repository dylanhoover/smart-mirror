import './App.css';
import MainPage from './pages/MainPage';
import { useState}  from 'react'
import { LayoutContext } from './Context';


function App() {

  const [layout, setLayout] = useState(1)
  return (
    <LayoutContext.Provider value={[layout, setLayout]}>
    <div className="App">
       <MainPage />
    </div>
    </LayoutContext.Provider>
  );
}

export default App;
