import './App.css';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
