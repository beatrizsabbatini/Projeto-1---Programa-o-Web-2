const usersContainer = document.querySelector('ul');
const errorContainer = document.querySelector('h4');


document.querySelector('button').addEventListener('click', () => {
    usersContainer.innerHTML = ''
    const query = document.querySelector('input').value;

    if(document.getElementById('search').value == ""){
        document.getElementById('search').focus();
        let error = document.createElement('h4');
        error.innerHTML = "Erro! Digite o nome a ser pesquisado!";
        errorContainer.appendChild(error);

      //  alert("Erro! Digite um nome a ser pesquisado!");
    } else if (document.getElementById('search').value.length < 3){
        document.getElementById('search').focus();
        let error = document.createElement('h4');
        error.innerHTML = "Erro! Digite um nome de usuário com no mínimo 3 caracteres!";
        errorContainer.appendChild(error);
        
        
        //alert("Erro! Digite um nome de usuário com no mínimo 3 caracteres!");
    }

    else{
        axios.get(`https://api.github.com/search/users?q=${query}`)
        .then(res => {
            console.log(res)
            const users = res.data.items;
            for (let i = 0; i < users.length && i < 20; i++){
                const li = document.createElement('li');
                const img = document.createElement('img');
                const username = document.createElement('a');
                username.innerHTML = users[i].login;
                img.src = users[i].avatar_url;
                username.href = users[i].html_url;
                li.appendChild(img);
                li.appendChild(username);
                usersContainer.appendChild(li);
            }
        })
    }
})