let contador = 0
let ss01 = 4
let ss02 = 0

let cronometro01
let cronometro02

function start(){
    let começar = document.getElementById('começar').style = 'display: none;'
    let tempo = 1000
    cronometro01 = setInterval(timer1, tempo)//timer1 é o timer regressivo
    

}//começa o cronometro

function timer1(){
    ss01--
    
    let formato01 = `O jogo começará em: <br> <strong>${ss01}</strong>`
    let timer01 = document.getElementById('timer-01').innerHTML = formato01//texto que vai aparecer quando clicar em 'Começar'

    if(ss01 === 0){//aqui o segundos zera e começa o jogo
        clearInterval(cronometro01)
        let timer01 = document.getElementById('timer-01').innerHTML = ''//aqui vai sumir o paragrafo do timer regressivo

        let tempo = 1000
        cronometro02 = setInterval(timer2, tempo)//começa o segundo timer
    }

    function timer2(){
        ss02++
        
        let formato02 = `cronômetro: ${ss02}`
        let timer02 = document.getElementById('timer-02').innerHTML = formato02//timer2
        let numCliques = document.getElementById('numCliques')
        let resposta = document.getElementById('resposta')

        resposta.innerHTML = '<button onclick="clicar()" id="contador"></button>'
                                +'<button onclick="pararTudo()" id="a">Parar</button>'//aparece o botao pra pessoa começar a clicar
        numCliques.innerHTML = `Você clicou <strong>${contador}</strong> vezes`

        if(contador >= 5 && ss02 <= 5){
            let resposta = document.getElementById('resposta').style = 'display: none;'//botao do contador some
            let numCliques = document.getElementById('numCliques').innerHTML = ''
            let timer02 = document.getElementById('timer-02').innerHTML = ''
            let recomeçar = document.getElementById('recomeçar')
            recomeçar.innerHTML = '<button onclick="recomeçar()" id="recomeçar02">Recomeçar</button>'

            clearInterval(cronometro02)

            let ganhou = document.getElementById('ganhou').innerHTML = 'Parabéns você ganhou :)' 
        }
        else if(contador <= 4 && ss02 >= 5){
            let resposta = document.getElementById('resposta').style = 'display: none;'//botao do contador some
            let numCliques = document.getElementById('numCliques').innerHTML = ''
            let timer02 = document.getElementById('timer-02').innerHTML = ''
            let recomeçar = document.getElementById('recomeçar')
            recomeçar.innerHTML = '<button onclick="recomeçar()" id="recomeçar02">Recomeçar</button>'    

            clearInterval(cronometro02)

            let perdeu = document.getElementById('perdeu').innerHTML = 'Você perdeu :('
        }
    }//timer2
}//timer1

function clicar(){
    contador++

    let numCliques = document.getElementById('numCliques').innerHTML = `Você clicou <strong>${contador}</strong> vezes`
}//clicou tantas vezes


function recomeçar(){
    location.reload()
}//atualiza a pagina





