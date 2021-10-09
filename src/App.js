import Header from "./components/Header/Header";
import Pokemons from "./components/Pokemons/Pokemons";
import './App.css'
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Pokemons />
      <Footer />
    </div>
  );
}

export default App;
