import React from 'react';
import CardList from './CardList';

class Main extends React.Component {
  render() {
      return (
        <div>
          <form>
            <input />
            <button type="submit">Поиск</button>
          </form>
          <CardList></CardList>
        </div>
      );
    }
} 

export default Main;