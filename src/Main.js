import React from 'react';
import CardList from './CardList';

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
        <div>
          <form onSubmit={handleSearch}>
            <input onChange={handleSearchChange}/>
            <button type="submit">Поиск</button>
          </form>
          <CardList names={names}></CardList>
        </div>
      );
    }

export default Main;