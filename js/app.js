document.querySelector('.get-joke').addEventListener('click', getJokes);

function getJokes(event) {
    let url = 'https://api.chucknorris.io/jokes/random';

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        let output = '';
        output += `${data.value}`
        document.querySelector('.joke').innerHTML = output;
    })
    .catch(error => {
        console.log(error);
    });

    event.preventDefault();
}