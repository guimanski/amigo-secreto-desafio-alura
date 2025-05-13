let amigos = [];
let statusBtn = document.getElementById('btn-sortear');
statusBtn.style.backgroundColor = '#D3D3D3';
statusBtn.style.color = '#808080';

function adicionar(){
    let lista = document.getElementById('lista-amigos');
    let nomeAmigo = document.getElementById('nome-amigo');
    
    if(nomeAmigo.value == ''){
        Swal.fire({
            title: 'Opa!',
            text: `Você não pode adicionar um amigo sem nome.`
        })
        return
    }else if(amigos.includes(nomeAmigo.value)){
    Swal.fire({
            title: 'Opa!',
            text: `Amigo ${nomeAmigo.value} já foi adicionado à lista.`
        })
    
    }else{
        amigos.push(nomeAmigo.value);
        

        if (lista.textContent == ''){
            lista.textContent = nomeAmigo.value;
        }else{
            lista.textContent = lista.textContent + ', ' + nomeAmigo.value;
        }
    }   
    statusBotao();
    nomeAmigo.value = '';
    
}

function sortear(){
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
            }
        }
}

function embaralhar(lista){
    // fazendo uso do algoritmo fisher yates para embaralhar o array via destructuring
    for(let indice = lista.length; indice; indice--){
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista [indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]]
    }
    console.log(lista);
}

function reiniciar() {
    Swal.fire({
        title: 'Atenção!',
        text: 'Isso reiniciará o sorteio. Você tem certeza?',
        icon: 'warning',
        showCancelButton: true
    }).then((result) => {
        if (result.isConfirmed) {
            amigos = [];
            document.getElementById('lista-amigos').innerHTML = '';
            document.getElementById('lista-sorteio').innerHTML = '';
        }
    });
}


function statusBotao(){
    
    if(amigos.length < 3){
        statusBtn.disabled = true;
        statusBtn.style.backgroundColor = '#D3D3D3';
        statusBtn.style.color = '#808080';
    }else{
        statusBtn.disabled = false;
        statusBtn.style.backgroundColor = '';
        statusBtn.style.color = '';
    }
}