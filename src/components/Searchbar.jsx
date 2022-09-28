import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SearchBar = () => (
    <form>
      <TextField
        id="search-bar"
        className="text"
        label="Search for a GIF"
        variant="outlined"
        placeholder="GIF "
        size="medium"
      />
      <IconButton type="submit" aria-label="search" className="icon">
        <SearchIcon />
      </IconButton>
    </form>
);

export default SearchBar;
