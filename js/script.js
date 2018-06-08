const btn = document.querySelector('.footer');
const fullnameDisp = document.querySelector('#fullname');
const avatar = document.querySelector('#avatar');
const username = document.querySelector('#username');
const city = document.querySelector('#city');
const email = document.querySelector('#email');

getUser = () => {
    const url = 'https://randomuser.me/api/';
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError)
}

handleErrors = (res) => {
    if (!res.ok) {
        throw Error(res.status);
    }
    return res;
}

parseJSON = (res) => {
    return res.json().then(parsedData => parsedData.results[0]);
}

updateProfile = (data) => {
    const fullName = `${data.name.first} ${data.name.last}`;
    fullnameDisp.textContent = fullName;
    avatar.src = data.picture.medium;
    username.textContent = data.login.username;
    city.textContent = data.location.city;
    email.textContent = data.email;
}

printError = (error) => {
    console.log(error);
}

btn.addEventListener('click', getUser);
