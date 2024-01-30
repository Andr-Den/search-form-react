import React from 'react';
import CardList from './CardList';
import "./Main.css"

import { search } from './search';

function Main() {

  const [searchInput, setSearchInput] = React.useState('')
  const [names, setNames] = React.useState([])

  function handleSearch(e) {
    e.preventDefault()
    search.getAll(searchInput).then(result => {
      setNames(result)
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
        <CardList className="cardlist" names={names} />
        </>
      );
    }

export default Main;