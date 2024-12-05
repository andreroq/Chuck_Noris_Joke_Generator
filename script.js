const loader = document.querySelector('#joke');
const jokeBtn = document.querySelector('#joke-btn');

const generateJoke = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200){
                loader.innerHTML = JSON.parse(xhr.responseText).value;
                console.log(loader.value)
            } else {
                loader.innerHTML = 'ERROR'
            }
        }
    };

    xhr.send();
}

jokeBtn.addEventListener('click', generateJoke);
window.addEventListener('DOMContentLoaded', generateJoke)



// xhr.open('GET', 'https://api.chucknorris.io/jokes/random')

// xhr.onreadystatechange = () => {

//     const joke = JSON.parse(this.responseText);

//     joke.forEach(e => {
//         const loader = document.querySelector('#joke')
//         loader.innerHTML = `${e.value}`
//         const btn = document.querySelector('#joke-btn')
//         btn.addEventListener('click', jok => {
//             loader.innerHTML = `${jok.value}`
//         })
//     });

// }


