function pesquisar() {
    let section = document.getElementById("resultado-pesquisa");
    section.innerHTML = ''; // Limpa a seção antes de adicionar resultados
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado</p>";
      return;
    }
  
    let resultado = "";
    let titulo = "";
    let descricao = "";
  
    // Itera pelas regiões
    for (let dado of dados) {
      // Itera pelos times de cada região
      for (let time of dado.times) {
        titulo = time.titulo.toLowerCase();
        descricao = time.descricao.toLowerCase();
  
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
          resultado += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${time.titulo}</a> <a>${time.logo}</a>
              </h2>
              <p class="decricao-meta">${time.descricao}</p>
              <p class="elenco-meta">${time.elenco.join(', ')}</p>
              <a href=${time.link} target="_blank">Mais Informações</a>
            </div> 
          `;
        }
      }
    }
  
    if (!resultado) {
      resultado = "<p>Nada foi encontrado</p>";
    }
    section.style.display = "block"; // Exibe a seção se houver resultados
    section.innerHTML = resultado;
  }
function exibirTimes() {
    for (let dado of dados) {
      let regiao = dado.regiao;
      let times = dado.times; // Array de times da região atual
  
      let divTimes = document.getElementById(`${regiao}-times`);
      let htmlTimes = "";
  
      // Itera pelos times da região atual
      for (let time of times) { 
        htmlTimes += `
          <div class="time">
            <h2>
              <a href="#" target="_blank">${time.titulo}</a> <a>${time.logo}</a>
            </h2>
            <p class="decricao-meta">${time.descricao}</p>
            <p class="elenco-meta">${time.elenco.join(', ')}</p>
            <a href=${time.link} target="_blank">Mais Informações</a>
          </div>
        `;
      }
  
      divTimes.innerHTML = htmlTimes;
    }
  }
  
  // Chama a função para exibir os times ao carregar a página
  exibirTimes();