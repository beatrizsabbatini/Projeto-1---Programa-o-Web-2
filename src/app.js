const usersContainer = document.querySelector('ul');



document.querySelector('button').addEventListener('click', () => {
const query = document.querySelector('input').value;

    if(document.getElementById('search').value == ""){
        document.getElementById('search').focus();
        alert("Erro! Digite um nome a ser pesquisado!");
    }
    else{
        axios.get(`https://api.github.com/search/users?q=${query}`)
        .then(res => {
            console.log(res)
            const users = res.data.items;
            for (let i = 0; i < users.length && i < 20; i++){
                let li = document.createElement('li');
                img = document.createElement('img');
                var desc = document.createElement('p');
                li.innerHTML = users[i].login;
                img.src = users[i].avatar_url;
                desc.innerHTML = users[i].html_url;
                li.appendChild(img);
                li.appendChild(desc);
                usersContainer.appendChild(li);
            }
        })
    }
})