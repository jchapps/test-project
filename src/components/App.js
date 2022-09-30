import '../styles/App.scss';
import '../styles/gifGrid.scss';
import '../styles/searchbar.scss';
import SearchBar from '../components/Searchbar'
import GifList from './GifList';
import React, { useState } from "react";

const giphy = require("giphy-api")({
  apiKey: "8dq7ojpO6TcW65DTXXd5aHG5iqeKib0D",
  https: true
});

function App() {
  const [gifIdList, setGifIds] = useState (['3o85xsGXVuYh8lM3EQ','riwAaDlaA3zQQ','aFTt8wvDtqKCQ', 'bGgsc5mWoryfgKBx1u', 'Z8k6qo0AVIsPdROQNd', '1Bh2nNww4IFE9rQZ3S', 'w36LqLo57gmvXa7wjf','3o7abKhOpu0NwenH3O', 'SRn9TUPpFuQAU'])
  const fetchGiphy = (keyword) => {
    giphy.search(
      {
        q: keyword,
        rating: "g",
        limit: 9,
      },
      (err, res) => {
        const gifIdsArr = res.data.map((gif) => gif.id)
        setGifIds(gifIdsArr)
      }
    );
  };

  return (
    <div>
      <div className="searchbar">
       <SearchBar fetchGiphy={fetchGiphy} />
      </div>
      <GifList gifIds={gifIdList}/>
    </div>
)}

export default App;
