function Func() {
    let minhaImagem = document.getElementsByClassName('imgPerfil')[0];
    let meuSrc = minhaImagem.getAttribute('src');
    if (meuSrc === 'imagens/foto_curriculo.jpg') {
        minhaImagem.setAttribute('src', 'imagens/moiseszin.jpeg');
    } else {
        minhaImagem.setAttribute('src', 'imagens/foto_curriculo.jpg');
    }
}
