import { CiSearch } from "react-icons/ci";
import "./Search.css";

const SearchBar = () => {
  return (
    <>
      <div className="wrapper">
        <input className="search" />
        <button className="search-btn">
          <CiSearch />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
