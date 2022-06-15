import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ProfileImage from "./components/ProfileImage"

function App() {
  return (
    <div className="App">
      <ProfileImage />
      <div className="contentWrapper">
      <Header />
      <Main />
      <Footer />
      </div>
    </div>
  );
}

export default App;
