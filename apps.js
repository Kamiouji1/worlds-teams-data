function pesquisar() {
    let section = document.getElementById("resultado-pesquisa");
// busque o elemento pelo ID dele.

console.log(section);

// Limpa o conteúdo da seção antes de adicionar novos dados
section.innerHTML = '';

let resultado = ""

for (let dado of dados){
    resultado += `
    <div class="item-resultado">
            <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="decricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais Informações</a>
        </div> 
`;
}

section.innerHTML = resultado
}