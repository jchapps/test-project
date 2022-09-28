import '../styles/App.scss';
import '../styles/gifGrid.scss';
import '../styles/searchbar.scss';
import '../styles/gif.scss';
import SearchBar from '../components/Searchbar'
import GifList from './GifList';

function App() {
  return (
    <div>
      <div className="searchbar">
       <SearchBar/>
      </div>
      <GifList/>
    </div>
)};

export default App;
