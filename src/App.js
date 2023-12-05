import './App.css';
import Termekek from './komponensek/Termekek';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyv Webáruház</h1>
      </header>
      <nav><p>Itt lesz a menü</p></nav>
      <article className='container'>
        <Termekek />
      </article>
      <footer>Dreilinger Vanssza Maja</footer>
    </div>
  );
}

export default App;
