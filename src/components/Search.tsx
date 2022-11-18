import React from "react";
import debounce from "lodash.debounce";
import { setSearch } from "../RTK/filter/filterSlice";

import { useAppDispatch } from "../RTK/store";

const Search: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();

  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState("");
  // const Debounce = React.useCallback(
  //   debounce((event) => {
  //     setSearchValue(event.target.value);
  //   }, 1000),
  //   []
  // );

  // useWhyDidYouUpdate("Search", { searchValue, value, setValue });

  const onClickClear = (e: React.MouseEvent<SVGSVGElement>) => {
    console.log(e);
    dispatch(setSearch(""));
    setValue("");
    inputRef.current?.focus();
  };
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearch(str));
    }, 1000),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div className="deliv-addres">
      <div className="deliv-addres__body">
        <div className="deliv-addres__text">Поиск по названию товара</div>
        <form action="#" className="deliv-addres__form">
          <img
            src="img/header/location-icon.png"
            alt="location-icon"
            className="deliv-addres__img"
          />
          <input
            ref={inputRef}
            type="text"
            required
            name="form[]"
            className="deliv-addres__input"
            placeholder="Найти..."
            value={value}
            onChange={onChangeInput}
          />
          {value && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClickClear}
            >
              <path
                d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                fill="currentColor"
              />
            </svg>
          )}
          <button type="button" className="deliv-addres__button">
            Проверить
          </button>
        </form>
      </div>
    </div>
  );
});

export default Search;
