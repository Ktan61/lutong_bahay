import './App.css';
import Header from './components/Header';

function App() {

  return (
    <div className='app'>
      <Header />
      This is the HOME PAGE
      <br />
      <a href={`/Testing`}>Link to Testing Page</a>
    </div>
  )
}

export default App
