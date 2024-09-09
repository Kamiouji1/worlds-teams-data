function pesquisar() {
    let section = document.getElementById
    ("resultado-pesquisa");
// busque o elemento pelo ID dele.

console.log(section);

// Limpa o conteúdo da seção antes de adicionar novos dados
section.innerHTML = '';

let campoPesquisa = document.getElementById
("campo-pesquisa").value

if(!campoPesquisa){
    section.innerHTML = "<p>Nada foi encontrado</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

console.log(campoPesquisa);

let resultado = "";
let titulo = "";
let descricao = "";
let elenco = "";
let logo = "";

for (let dado of dados){

    titulo = dado.titulo.toLocaleLowerCase()
    descricao = dado.descricao.toLocaleLowerCase()
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
        
    resultado += `
    <div class="item-resultado">
            <h2>
            <a href="#" target="_blank">${dado.titulo}</a> <a>${dado.logo}</a>
            </h2>
            <p class="decricao-meta">${dado.descricao}</p>
            <p class="elenco-meta">${dado.elenco}</p>
            <a href=${dado.link} target="_blank">Mais Informações</a>
        </div> 
`;
    }
}

if(!resultado) {
    resultado = "<p>Nada foi encontrado</p>"
}

section.innerHTML = resultado
}