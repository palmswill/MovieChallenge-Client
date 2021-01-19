import './App.css';
import './component/ComponentStyling.css'
import MovieNomination from './component/MovieNomination';
import ResultDisplay from './component/ResultDisplay';
import SearchBar from './component/Searchbar.js';
import SlideShow from './component/SlideShow/Slideshow';
import MovieSearchContextProvider from './context/MovieContext.js';




function App() {
  return (
    <div className="App">
      <h1 id="titleBar">The Shoppies</h1>
      <MovieSearchContextProvider>
        <SearchBar />
        <SlideShow />
        <ResultDisplay />
        <MovieNomination />
      </MovieSearchContextProvider>
    </div>
  );
}

export default App;
