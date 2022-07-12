//const URL_BASE = "https://pablohsg.github.io/Requisicoes/API";
//const URL_BASE = "http://localhost:5000"
const URL_BASE = "https://rede-social-goodnews.herokuapp.com";

export async function RequisitaLogin(username,password){
    let dados = {
        username:username,
        password:password
    }

    return await fetch(URL_BASE + "/login", {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(response => response.json())
    .catch((erro) => {
        return {erro:erro}
    })  
}

export async function RequisitaPosts() {
    return await fetch(URL_BASE + "/postagens")
    .then(response => response.json())
    .then((json) => {
        return json
    }).catch((erro) => {
        throw erro;
    })
}

export async function RequisitaMeusPosts() {
    let user = JSON.parse(localStorage.getItem('usuario-tp-web'));

    return await fetch(URL_BASE + "/postagens/minhasPostagens", {
        method: 'GET',
        headers: { "Content-type": "application/json; charset=UTF-8", "bearer": user.token }
    })
    .then(response => response.json())
    .catch((erro) => {
        throw erro;
    })
}

export async function RequisitaMeusComentarios() {
    let user = JSON.parse(localStorage.getItem('usuario-tp-web'));

    return await fetch(URL_BASE + "/postagens/meusComentarios", {
        method: 'GET',
        headers: { "Content-type": "application/json; charset=UTF-8", "bearer": user.token }
    })
    .then(response => response.json())
    .catch((erro) => {
        throw erro;
    })
}

export async function RequisitaEditaPerfil(nome,fotoUsuario,bio){
    let user = JSON.parse(localStorage.getItem('usuario-tp-web'));

    let dados = {
        nome:nome,
        fotoUsuario:fotoUsuario,
        bio:bio
    }

    return await fetch(URL_BASE + "/usuarios", {
        method: 'PUT',
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8", "bearer": user.token }
    })
    .then(response => response.json())
    .catch((erro) => {
        return {erro:erro}
    })  
}

export async function RequisitaCriarPost(mensagem){
    let user = JSON.parse(localStorage.getItem('usuario-tp-web'));

    let dados = {
        mensagem:mensagem
    }

    return await fetch(URL_BASE + "/postagens", {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8", bearer:user.token }
    })
    .then(response => response.json())
    .catch((erro) => {
        return {erro:erro}
    })  
}

export async function RequisitaLike(idPost){
   let user = JSON.parse(localStorage.getItem('usuario-tp-web'));

    let dados = {
        idPost:idPost
    }

    return await fetch(URL_BASE + "/postagens/insereLike", {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8", bearer:user.token }
    })
    .then(response => response.json())
    .catch((erro) => {
        return {erro:erro}
    })  
}

export async function RequisitaDeslike(idPost){
    let user = JSON.parse(localStorage.getItem('usuario-tp-web'));

    let dados = {
        idPost:idPost
    }

    return await fetch(URL_BASE + "/postagens/insereDislike", {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8", bearer:user.token }
    })
    .then(response => response.json())
    .catch((erro) => {
        return {erro:erro}
    }) 
}

export async function RequisitaDeletePostagem(idPost){
    let user = JSON.parse(localStorage.getItem('usuario-tp-web'));
    
    return await fetch(URL_BASE + `/postagens/${idPost}`, {
        method: 'DELETE',
        headers: { "Content-type": "application/json; charset=UTF-8", bearer:user.token }
    })
    .then(response => response.json())
    .catch((erro) => {
        return {erro:erro}
    })
}

export async function RequisitaNovoComentario(mensagem, idPost){
    let user = JSON.parse(localStorage.getItem('usuario-tp-web'));

    let dados = {
        mensagem:mensagem,
        idPost:idPost
    }

    return await fetch(URL_BASE + "/postagens/insereComentario", {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8", bearer:user.token }
    })
    .then(response => response.json())
    .catch((erro) => {
        return {erro:erro}
    })
}

export async function RequisitaNovoUsuario(username, email, password, name){
    let dados = {
        username:username,
        email:email,
        password:password,
        name:name
    }

    return await fetch(URL_BASE + "/usuarios", {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(response => response.json())
    .catch((erro) => {
        return {erro:erro}
    })  

}