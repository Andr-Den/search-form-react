class Search {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _paginated_fetch(url, data = []) {
    return fetch(url)
    .then(response => this._checkResponse(response))
    .then(newData => {
      const response = [...data, ...newData.results]

      if (newData.next) {
        url = newData.next

        return this._paginated_fetch(url, response)
      }
      return response
    })
  }

  getAll(searchInput) {
    return this._paginated_fetch(this._baseUrl + '?search=' + searchInput)
  }
}

export const search = new Search({
  baseUrl: 'https://swapi.dev/api/people',
});