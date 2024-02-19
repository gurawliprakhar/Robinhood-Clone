import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Newsfeed from './NewsFeed';
import Stats from './Stats';

function App() {
  return (
    <div className="App">
     {/* Header */}
     <div className="app__header">
      <Header/>
     </div>
     <div className="app__body">
      <div className="app__container">
        <Newsfeed />
        {/* stats */}
        <stats />
      </div>
     </div>
    </div>
  );
}

export default App;
