import '../styles/App.scss';
import '../styles/gifGrid.scss';
import '../styles/searchbar.scss';
import SearchBar from '../components/Searchbar'
import GifList from './GifList';

function App() {
  const gifIds = ['3o85xsGXVuYh8lM3EQ','riwAaDlaA3zQQ','aFTt8wvDtqKCQ', 'bGgsc5mWoryfgKBx1u', 'Z8k6qo0AVIsPdROQNd', '1Bh2nNww4IFE9rQZ3S', 'w36LqLo57gmvXa7wjf','3o7abKhOpu0NwenH3O', 'SRn9TUPpFuQAU']
  return (
    <div>
      <div className="searchbar">
       <SearchBar/>
      </div>
      <GifList gifIds={gifIds}/>
    </div>
)};

export default App;
