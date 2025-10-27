let h1 = document.querySelector(`h1`)

let startButton = document.querySelector(`.button-1`)
let stopButton = document.querySelector(`.button-2`)

let number = 0

let body = document.querySelector(`body`)

function start() {
    cross = setInterval(() => {

        number++

        h1.innerHTML = new Intl.NumberFormat('pt-BR', {
            minimumIntegerDigits: 2,
            useGrouping: false
        }).format(number)
    }, 1000);
    function disabledButton1() {
        startButton.disabled = true;
        startButton.style.display = `none`;

        stopButton.disabled = false;
        stopButton.style.display = `inline`;
    }

    body.style.backgroundColor = (`#311aac`)

    disabledButton1()
}

function stop() {
    clearInterval(cross)
    number = 0
    h1.innerHTML = new Intl.NumberFormat('pt-BR', {
        minimumIntegerDigits: 2,
        useGrouping: false
    }).format(number)

    startButton.disabled = false;
    startButton.style.display = `inline`;

    stopButton.disabled = true;
    stopButton.style.display = `none`;

    body.style.backgroundColor = (`#120942`)

    trocarCor2()

    startButton.style.marginRight = `0px`;
}

function trocarCor() {
    h1.style.backgroundColor = (`#100956`);
    h1.style.color = (`#1f00cd`)
}

function trocarCor2() {
    h1.style.backgroundColor = (`#1f00cd`);
    h1.style.color = (`#150b51`)
}