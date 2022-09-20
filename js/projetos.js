
window.onload= function(){
    document.getElementById("pTitulo").onclick = function () {
        window.location.href = "../index.html";
        return false;
    }
}

function carrossel(){
    /*CARROSSEL 0*/
    const fila0 = document.getElementById('conteudoCarrossel0');
    const imagens0 = document.querySelectorAll('#imagens0');

    const flechaEsquerda0 = document.getElementById('flecha-esquerda0');
    const flechaDireita0 = document.getElementById('flecha-direita0');

    /*CARROSSEL 0*/
    /* Rolagem - Flecha direita */
    flechaDireita0.addEventListener('click', () => {
        fila0.scrollLeft += fila0.offsetWidth;

        const indicadorAtivo0 = document.querySelector('#conteudo0 .ativo');
        if(indicadorAtivo0.nextSibling){
            indicadorAtivo0.nextSibling.classList.add('ativo');
            indicadorAtivo0.classList.remove('ativo');
        }
    });

    /*CARROSSEL 0*/
    /* Rolagem - Flecha esquerda */
    flechaEsquerda0.addEventListener('click', () => {
        fila0.scrollLeft -= fila0.offsetWidth;

        const indicadorAtivo0 = document.querySelector('#conteudo0 .ativo');
        if (indicadorAtivo0.previousSibling) {
            indicadorAtivo0.previousSibling.classList.add('ativo');
            indicadorAtivo0.classList.remove('ativo');
        }
    });


    /*CARROSSEL 0*/
    /* Paginação */
    const numeroPaginas0 = Math.ceil(imagens0.length / 5);
    for(let i = 0; i < numeroPaginas0; i++){
        const indicador0 = document.createElement('button');

        if(i === 0){
            indicador0.classList.add('ativo');
        }

        document.querySelector('#conteudo0').appendChild(indicador0);
        indicador0.addEventListener('click', (e0) => {
            fila0.scrollLeft = i * fila0.offsetWidth;
            document.querySelector('#conteudo0 .ativo').classList.remove('ativo');
            e0.target.classList.add('ativo');
        });
    }

    /*CARROSSEL 0*/
    /* Hover */
    imagens0.forEach((imagem0) => {
        imagem0.addEventListener('mouseenter', (e0) => {
            const elemento  = e0.currentTarget;
            setTimeout(() => {
                imagens0.forEach(imagens0  => imagens0.classList.remove('hover'));
                elemento.classList.add('hover');
            }, 300);
        });
    });

    fila0.addEventListener('mouseleave', () => {
        imagens0.forEach(imagens0 => imagens0.classList.remove('hover'));
    });

    fila1.addEventListener('mouseleave', () => {
        imagens1.forEach(imagens1 => imagens1.classList.remove('hover'));
    });

    fila2.addEventListener('mouseleave', () => {
        imagens2.forEach(imagens2 => imagens2.classList.remove('hover'));
    });

    fila3.addEventListener('mouseleave', () => {
        imagens3.forEach(imagens3 => imagens3.classList.remove('hover'));
    });
}