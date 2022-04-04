alert('Clicar 3 vezes em menos de 5 segundos')

let contador = 0
let ss01 = 4
let ss02 = 0

let cronometro01
let cronometro02

function start(){
    let tempo = 1000
    clearInterval(cronometro01)//caso clicar mais de uma vez, n vai acelerar o 'tempo'
    cronometro01 = setInterval(timer1, tempo)//timer1 é o timer regressivo 

}//começa o cronometro



function timer1(){
    ss01--
    
    let formato01 = `O jogo começará em ${ss01}`
    let timer01 = document.getElementById('timer-01').innerHTML = formato01//texto que vai aparecer quando clicar em 'Começar'

    if(ss01 === 0){//aqui o segundos zera e começa o jogo
        clearInterval(cronometro01)
        ss01 = 4
        let timer01 = document.getElementById('timer-01').innerHTML = ''//aqui vai sumir o paragrafo do timer regressivo


        let resposta = document.getElementById('resposta')
        resposta.innerHTML = '<button class="clique" onclick="clicar()">Clique aqui</button>'//aparece o botao pra pessoa começar a clicar

        let tempo = 1000
        cronometro02 = setInterval(timer2, tempo)
    }
}

function timer2(){
        ss02++
        let formato02 = `${ss02}`
        let timer02 = document.getElementById('timer-02').innerHTML = formato02

        if(ss02 < 5 && contador === 3){
            let ganhou = document.getElementById('ganhou')
            ganhou.innerHTML = 'Parabéns você ganhou :)'

            clearInterval(cronometro02)
            contador = 0
            ss = 0 
            let timer02 = document.getElementById('timer-02').innerHTML = ''
            let numCliques = document.getElementById('numCliques').innerHTML = ''
        }
        else if(ss02 === 5 && contador < 3){
            let perdeu = document.getElementById('perdeu')
            perdeu.innerHTML = 'Você perdeu :('

            clearInterval(cronometro02)
            contador = 0
            ss = 0 
            let timer02 = document.getElementById('timer-02').innerHTML = ''
            let numCliques = document.getElementById('numCliques').innerHTML = ''
        }
}//segundo timer

function clicar(){
    let numCliques = document.getElementById('numCliques')
    contador++

    numCliques.innerHTML = `Você clicou ${contador} vezes`
}//clicou tantas vezes


    