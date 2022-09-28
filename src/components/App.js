import '../styles/App.scss';
import '../styles/gifGrid.scss';
import SearchBar from '../components/Searchbar'
import GifList from './GifList';

function App() {
  return (
    <div>
      <SearchBar/>
      <GifList/>
    </div>
)};

export default App;
