document.querySelector('.get-joke').addEventListener('click', getJokes);

function getJokes(event) {
    let url = `http://api.icndb.com/jokes/random/`;

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        let output = '';
        output += `${data.value.joke}`
        document.querySelector('.joke').innerHTML = output;
    })
    .catch(error => {
        console.log(error);
    });

    event.preventDefault();
}