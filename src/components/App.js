import React, { useState, useEffect } from "react";
import '../styles/App.scss';
import '../styles/gifGrid.scss';
import '../styles/searchbar.scss';
import '../styles/pagination.scss';
import SearchBar from '../components/Searchbar'
import GifList from './GifList';
import Paginate from './Paginate'


const giphy = require("giphy-api")({
  apiKey: "8dq7ojpO6TcW65DTXXd5aHG5iqeKib0D",
  https: true
});

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const [gifIdList, setGifIds] = useState (['3o85xsGXVuYh8lM3EQ',
  'riwAaDlaA3zQQ',
  'aFTt8wvDtqKCQ',
  'bGgsc5mWoryfgKBx1u',
  'Z8k6qo0AVIsPdROQNd',
  '1Bh2nNww4IFE9rQZ3S',
  'w36LqLo57gmvXa7wjf',
  '3o7abKhOpu0NwenH3O',
  'SRn9TUPpFuQAU'])

  const currentItems = gifIdList.slice(indexOfFirstItem, indexOfLastItem)

  const fetchGiphy = (keyword) => {
    giphy.search(
      {
        q: keyword,
        rating: "g",
        limit: 43
      },
      (err, res) => {
        const gifIdsArr = res.data.map((gif) => gif.id)
        setGifIds(gifIdsArr)
      }
    );
  };

  const pageSelected = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div>
      <div className="searchbar">
       <SearchBar fetchGiphy= { fetchGiphy } />
      </div>
      <Paginate

        pageSelected= { pageSelected }
        currentPage= { currentPage }
        itemsPerPage= { itemsPerPage }
        totalItems= { gifIdList.length }/>
      <GifList gifIds= { currentItems }/>
    </div>
)}

export default App;
