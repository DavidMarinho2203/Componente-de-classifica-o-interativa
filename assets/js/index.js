let escolhido = []


document.querySelectorAll('.classificar').forEach(element => {
    element.addEventListener('click',(e) => {
        const valorEscolhido = e.target.textContent
        escolhido.pop()
        escolhido.push(valorEscolhido)
        document.querySelectorAll('.classificar').forEach(item => {
            item.classList.remove('selecionado')
        })

        e.target.classList.add('selecionado')
    })
})

document.getElementById('container__enviar').addEventListener('click', (e) => {

    const avaliacao = document.getElementById('avaliacao')
    const avaliado = document.getElementById('avaliado')
    avaliacao.style.display = avaliacao.style.display == 'none' ? "flex" : "none"
    avaliado.style.display = avaliado.style.display == 'flex' ? 'none' : 'flex'



    const resultado = document.getElementById('resultado')
    resultado.textContent = `Você selecionou ${escolhido[0]} de 5`

})

document.getElementById('container__atualizar').addEventListener('click', () => {
    location.reload()
})