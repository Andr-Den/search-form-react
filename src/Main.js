import React from 'react';
import CardList from './CardList';
import Preloader from './Preloader';
import "./Main.css"

import { search } from './search';

function Main() {

  const [searchInput, setSearchInput] = React.useState('');
  const [names, setNames] = React.useState([]);
  const [preload, setPreload] = React.useState(false)

  function handleSearch(e) {
    e.preventDefault()
    setPreload(true)
    search.getAll(searchInput).then(result => {
      setNames(result)
      setPreload(false)
    })
  }

function handleSearchChange(e) {
  setSearchInput(e.target.value)
}

      return (
        <>
        <div className="form">
          <form className="form__container" onSubmit={handleSearch}>
            <input className="form__input" onChange={handleSearchChange}/>
            <button className="form__button" type="submit">Поиск</button>
          </form>
        </div>
        {preload ? <Preloader /> : ''}
        <CardList className="cardlist" names={names} />
        </>
      );
    }

export default Main;