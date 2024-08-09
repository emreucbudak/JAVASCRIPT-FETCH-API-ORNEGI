function deneme (url) {
  fetch(url)
  .then ((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    Array.from(data).forEach(deneme => {
      console.log(deneme.name)
    })
  })
  .catch((err) => {
    console.log(err);
  })
}
deneme("https://jsonplaceholder.typicode.com/comments")
// returnu unutmayın !!!!!!!!!!!!!!!!!!!!!!
// return önemli