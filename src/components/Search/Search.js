import styles from "./Search.module.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import { fetchSearchResults } from "../../store/actions/searchActions";
import { useDispatch, useSelector } from "react-redux";
const Search = () => {
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState(sessionStorage.getItem('searchTerm') ?? '');
  const searchData = useSelector((state) => state.search);
  const handleChange = async (e) => {
    setTimeout(() => {
      const { value } = e.target;
      setSearchTerm(value);
    }, 500);
  };
  useEffect(() => {
    dispatch(fetchSearchResults(searchTerm))
    sessionStorage.setItem('searchTerm', searchTerm)
  }, [searchTerm, dispatch]);
  return (
    <>
      <Navigation />
      <div className={styles.searchbox}>
        <input type="text" defaultValue={searchTerm} onChange={handleChange} />
      </div>
      {searchData.length > 0 && <Card cardsData={searchData} />}
    </>
  );
};
export default Search;
