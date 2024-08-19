function advanceMonth() {
    meses = document.querySelector('#Meses');
    lucrosMensais = document.querySelector('#LucrosMensais');
    dinheiroEmCaixa = document.querySelector('#DinheiroEmCaixa');

    mes = parseInt(meses.value);
    income = parseInt(lucrosMensais.value)

    if (mes < 11) {
        meses.value = mes + 1;
        dinheiroEmCaixa.value = parseInt(dinheiroEmCaixa.value) + income
    }
    else {
        meses.value = 12;
        endGame();
    }

    updateProgressBar(meses);
};

function endGame() {
    alert('A aventura terminou!');
};

function loadGame() {
    setValueAndupdateProgressBar('#BandidosProcurados', localStorage.getItem('BandidosProcurados'));
    setValueAndupdateProgressBar('#Cartuchos', localStorage.getItem('Cartuchos'));
    setValueAndupdateProgressBar('#Comida', localStorage.getItem('Comida'));
    setValueAndupdateProgressBar('#Escolaridade', localStorage.getItem('Escolaridade'));
    setValueAndupdateProgressBar('#Ferraduras', localStorage.getItem('Ferraduras'));
    setValueAndupdateProgressBar('#Habitantes', localStorage.getItem('Habitantes'));
    setValueAndupdateProgressBar('#HabitantesDePrestigio', localStorage.getItem('HabitantesDePrestigio'));
    setValueAndupdateProgressBar('#Meses', localStorage.getItem('Meses'));
    setValueAndupdateProgressBar('#MoedasDeOuro', localStorage.getItem('MoedasDeOuro'));
    setValueAndupdateProgressBar('#Satisfacao', localStorage.getItem('Satisfacao'));
    setValueAndupdateProgressBar('#Saude', localStorage.getItem('Saude'));
    setValueAndupdateProgressBar('#Seguranca', localStorage.getItem('Seguranca'));
    setValueAndupdateProgressBar('#Tesouros', localStorage.getItem('Tesouros'));
    setValueAndupdateProgressBar('#Trabalho', localStorage.getItem('Trabalho'));


    document.querySelector('#AnotacoesDiversas1').value = localStorage.getItem('AnotacoesDiversas1');
    document.querySelector('#AnotacoesDiversas2').value = localStorage.getItem('AnotacoesDiversas2');
    document.querySelector('#DinheiroEmCaixa').value = localStorage.getItem('DinheiroEmCaixa');
    document.querySelector('#LucrosMensais').value = localStorage.getItem('LucrosMensais');
    document.querySelector('#UltimaPagina').value = localStorage.getItem('UltimaPagina');

    for (var i = 1; i <= 12; i++) {
        document.querySelector(`#Relacoes${i}Nome`).value = localStorage.getItem(`Relacoes${i}Nome`);
        document.querySelector(`#Relacoes${i}B`).checked = localStorage.getItem(`Relacoes${i}B`) == "true";
        document.querySelector(`#Relacoes${i}N`).checked = localStorage.getItem(`Relacoes${i}N`) == "true";
        document.querySelector(`#Relacoes${i}R`).checked = localStorage.getItem(`Relacoes${i}R`) == "true";
    }

    bootstrap.Toast.getOrCreateInstance(ToastCarregar).show();
};

function newGame() {
    setValueAndupdateProgressBar('#BandidosProcurados', 0);
    setValueAndupdateProgressBar('#Cartuchos', 12);
    setValueAndupdateProgressBar('#Comida', 5);
    setValueAndupdateProgressBar('#Escolaridade', 0);
    setValueAndupdateProgressBar('#Ferraduras', 0);
    setValueAndupdateProgressBar('#Habitantes', 5);
    setValueAndupdateProgressBar('#HabitantesDePrestigio', 0);
    setValueAndupdateProgressBar('#Meses', 1);
    setValueAndupdateProgressBar('#MoedasDeOuro', 0);
    setValueAndupdateProgressBar('#Satisfacao', 0);
    setValueAndupdateProgressBar('#Saude', 0);
    setValueAndupdateProgressBar('#Seguranca', 10);
    setValueAndupdateProgressBar('#Tesouros', 0);
    setValueAndupdateProgressBar('#Trabalho', 5);

    document.querySelector('#AnotacoesDiversas1').value = '';
    document.querySelector('#AnotacoesDiversas2').value = 'Revolver';
    document.querySelector('#DinheiroEmCaixa').value = 0;
    document.querySelector('#LucrosMensais').value = 0;
    document.querySelector('#UltimaPagina').value = 'Página 2';

    for (var i = 1; i <= 12; i++) {
        document.querySelector(`#Relacoes${i}Nome`).value = '';
        document.querySelector(`#Relacoes${i}B`).checked = false;
        document.querySelector(`#Relacoes${i}N`).checked = false;
        document.querySelector(`#Relacoes${i}R`).checked = false;
    }

    bootstrap.Toast.getOrCreateInstance(ToastNovoJogo).show();
};

function saveGame() {
    localStorage.setItem('BandidosProcurados', document.querySelector('#BandidosProcurados').value);
    localStorage.setItem('Cartuchos', document.querySelector('#Cartuchos').value);
    localStorage.setItem('Comida', document.querySelector('#Comida').value);
    localStorage.setItem('Escolaridade', document.querySelector('#Escolaridade').value);
    localStorage.setItem('Ferraduras', document.querySelector('#Ferraduras').value);
    localStorage.setItem('Habitantes', document.querySelector('#Habitantes').value);
    localStorage.setItem('HabitantesDePrestigio', document.querySelector('#HabitantesDePrestigio').value);
    localStorage.setItem('Meses', document.querySelector('#Meses').value);
    localStorage.setItem('MoedasDeOuro', document.querySelector('#MoedasDeOuro').value);
    localStorage.setItem('Satisfacao', document.querySelector('#Satisfacao').value);
    localStorage.setItem('Saude', document.querySelector('#Saude').value);
    localStorage.setItem('Seguranca', document.querySelector('#Seguranca').value);
    localStorage.setItem('Tesouros', document.querySelector('#Tesouros').value);
    localStorage.setItem('Trabalho', document.querySelector('#Trabalho').value);


    localStorage.setItem('AnotacoesDiversas1', document.querySelector('#AnotacoesDiversas1').value);
    localStorage.setItem('AnotacoesDiversas2', document.querySelector('#AnotacoesDiversas2').value);
    localStorage.setItem('DinheiroEmCaixa', document.querySelector('#DinheiroEmCaixa').value);
    localStorage.setItem('LucrosMensais', document.querySelector('#LucrosMensais').value);
    localStorage.setItem('UltimaPagina', document.querySelector('#UltimaPagina').value);


    for (var i = 1; i <= 12; i++) {
        localStorage.setItem(`Relacoes${i}Nome`, document.querySelector(`#Relacoes${i}Nome`).value);
        localStorage.setItem(`Relacoes${i}B`, document.querySelector(`#Relacoes${i}B`).checked);
        localStorage.setItem(`Relacoes${i}N`, document.querySelector(`#Relacoes${i}N`).checked);
        localStorage.setItem(`Relacoes${i}R`, document.querySelector(`#Relacoes${i}R`).checked);

    }

    bootstrap.Toast.getOrCreateInstance(ToastSalvar).show();
};

function setValueAndupdateProgressBar(querySelector, value) {
    const element = document.querySelector(querySelector);
    element.value = value;
    updateProgressBar(element);
};

function updateIncome(amount) {
    input = document.querySelector('#LucrosMensais');

    value = parseInt(input.value);
    newValue = value + amount;

    input.value = newValue > 0 ? newValue : 0;
}

function updateMoney(amount) {
    input = document.querySelector('#DinheiroEmCaixa');

    value = parseInt(input.value);
    newValue = value + amount;

    input.value = newValue > 0 ? newValue : 0;
}

function updateProgressBar(element) {
    progressBar = document.querySelector(`#${element.id}ProgressBar`);
    progress = (element.value / element.max) * 100;

    progressBar.style.width = progress + '%';
};

document.addEventListener('DOMContentLoaded', () => {
    const bandidosProcurados = document.querySelector('#BandidosProcurados');
    bandidosProcurados.addEventListener('change', () => {
        updateProgressBar(bandidosProcurados);
    });

    const carregar = document.querySelector('#Carregar');
    carregar.addEventListener('click', () => {
        loadGame();
    });

    const cartuchos = document.querySelector('#Cartuchos');
    cartuchos.addEventListener('change', () => {
        updateProgressBar(cartuchos);
    });

    const comida = document.querySelector('#Comida');
    comida.addEventListener('change', () => {
        updateProgressBar(comida);
    });

    const dinheiroMaisDez = document.querySelector('#DinheiroMais10');
    dinheiroMaisDez.addEventListener('click', () => {
        updateMoney(10);
    });
    const dinheiroMaisCem = document.querySelector('#DinheiroMais100');
    dinheiroMaisCem.addEventListener('click', () => {
        updateMoney(100);
    });
    const dinheiroMenosDez = document.querySelector('#DinheiroMenos10');
    dinheiroMenosDez.addEventListener('click', () => {
        updateMoney(-10);
    });
    const dinheiroMenosCem = document.querySelector('#DinheiroMenos100');
    dinheiroMenosCem.addEventListener('click', () => {
        updateMoney(-100);
    });

    const escolaridade = document.querySelector('#Escolaridade');
    escolaridade.addEventListener('change', () => {
        updateProgressBar(escolaridade);
    });

    const ferraduras = document.querySelector('#Ferraduras');
    ferraduras.addEventListener('change', () => {
        updateProgressBar(ferraduras);
    });

    const habitantes = document.querySelector('#Habitantes');
    habitantes.addEventListener('change', () => {
        updateProgressBar(habitantes);
    });

    const habitantesDePrestigio = document.querySelector('#HabitantesDePrestigio');
    habitantesDePrestigio.addEventListener('change', () => {
        updateProgressBar(habitantesDePrestigio);
    });

    const lucroMaisDez = document.querySelector('#LucroMais10');
    lucroMaisDez.addEventListener('click', () => {
        updateIncome(10);
    });
    const lucroMaisCem = document.querySelector('#LucroMais100');
    lucroMaisCem.addEventListener('click', () => {
        updateIncome(100);
    });
    const lucroMenosDez = document.querySelector('#LucroMenos10');
    lucroMenosDez.addEventListener('click', () => {
        updateIncome(-10);
    });
    const lucroMenosCem = document.querySelector('#LucroMenos100');
    lucroMenosCem.addEventListener('click', () => {
        updateIncome(-100);
    });

    const meses = document.querySelector('#Meses');
    meses.addEventListener('change', () => {
        updateProgressBar(meses);
    });

    const moedasDeOuro = document.querySelector('#MoedasDeOuro');
    moedasDeOuro.addEventListener('change', () => {
        updateProgressBar(moedasDeOuro);
    });

    const novoJogo = document.querySelector('#NovoJogo');
    novoJogo.addEventListener('click', () => {
        newGame();
    });

    const proximoMes = document.querySelector('#ProximoMes');
    proximoMes.addEventListener('click', () => {
        advanceMonth();
    });

    const salvar = document.querySelector('#Salvar');
    salvar.addEventListener('click', () => {
        saveGame();
    });


    const satisfacao = document.querySelector('#Satisfacao');
    satisfacao.addEventListener('change', () => {
        updateProgressBar(satisfacao);
    });

    const saude = document.querySelector('#Saude');
    saude.addEventListener('change', () => {
        updateProgressBar(saude);
    });

    const seguranca = document.querySelector('#Seguranca');
    seguranca.addEventListener('change', () => {
        updateProgressBar(seguranca);
    });

    const tesouros = document.querySelector('#Tesouros');
    tesouros.addEventListener('change', () => {
        updateProgressBar(tesouros);
    });

    const trabalho = document.querySelector('#Trabalho');
    trabalho.addEventListener('change', () => {
        updateProgressBar(trabalho);
    });

    const ultimaPagina = document.querySelector('#UltimaPagina');
    ultimaPagina.addEventListener('focus', () => {
        ultimaPagina.select();
    });
    ultimaPagina.addEventListener('change', () => {
        saveGame();
    });

    loadGame();
});
