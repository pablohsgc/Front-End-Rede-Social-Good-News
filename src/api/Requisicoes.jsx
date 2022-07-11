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
    return await fetch(URL_BASE + "/meusPosts.json")
    .then(response => response.json())
    .then((json) => {
        return json
    }).catch((erro) => {
        throw erro;
    })
}

export async function RequisitaMeusComentarios() {
    return await fetch(URL_BASE + "/comentarios.json")
    .then(response => response.json())
    .then((json) => {
        return json
    }).catch((erro) => {
        throw erro;
    })
}