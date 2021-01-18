import './App.css';
import './component/ComponentStyling.css'
import MovieNomination from './component/MovieNomination';
import ResultDisplay from './component/ResultDisplay';
import SearchBar from './component/Searchbar.js';
import MovieSearchContextProvider from './context/MovieContext.js';
import Loader from 'react-loader-spinner';



function App() {
  return (
    <div className="App">
    <div id="title"><h1>The Shoppies</h1>
    <Loader
         id="loader"
         type="Grid"
         color="#00BFFF"
         height={50}
         width={50} 
      /></div>
      <MovieSearchContextProvider>
        <SearchBar />
        <ResultDisplay/>
        <MovieNomination/>
      </MovieSearchContextProvider>
    </div>
  );
}

export default App;
