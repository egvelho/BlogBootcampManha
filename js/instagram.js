async function carregaImagensInstagram() {
  let instagramImagens = document.querySelector('.instagram-imagens');

  try {
    const resposta = await fetch('/json/instagram-posts.json');
    const publis = await resposta.json();

    for (const publi of publis) {
      console.log(publi);
      let publiLink = document.createElement('a');
      publiLink.href = publi.link;
      
      let publiImagem = document.createElement('img');
      publiImagem.src = publi.imagem;
      publiImagem.className = 'instagram-imagem';

      publiLink.appendChild(publiImagem);
      instagramImagens.appendChild(publiLink);
    }
  } catch (error) {
    console.log(error);
    instagramImagens.innerHTML = 'Houve um erro ao carregar as imagens';
  }
}

carregaImagensInstagram();