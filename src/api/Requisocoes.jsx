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