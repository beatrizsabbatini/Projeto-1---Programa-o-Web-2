const usersContainer = document.querySelector('ul');

document.querySelector('button').addEventListener('click', () => {

const query = document.querySelector('input').value;
    axios.get(`https://api.github.com/search/users?q=${query}`)
        .then(res => {
            console.log(res)
            const users = res.data.items;
            for (let i = 0; i < users.length && i < 20; i++){
                let li = document.createElement('li');
                li.innerHTML = users[i].login;
                usersContainer.appendChild(li);
            }
        })
})