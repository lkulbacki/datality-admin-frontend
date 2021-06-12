const ENDPOINT = "http://localhost:8000/api/v1/products/";

export function getProducts() {
  return fetch(ENDPOINT)
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(json => json);
}
