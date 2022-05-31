const URL_BASE = "https://pablohsg.github.io/Requisicoes/API";

export async function RequisitaPosts() {
    return await fetch(URL_BASE + "/posts.json")
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