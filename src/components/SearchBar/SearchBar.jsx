import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;

    if (form.elements.topic.value.trim() === "") {
      return toast.error("Search something");
    }
    onSubmit(topic);
    form.reset();
  };

  return (
    <header className={css.searchBarHeader}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="topic"
          placeholder="Search images..."
        />
        <button className={css.searchBtn} type="submit">
          <CiSearch className={css.searchIcon} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
