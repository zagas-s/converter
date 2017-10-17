let button = document.getElementById('button'),
    input = document.getElementById('input'),
    eur = document.getElementById('EUR'),
    usd = document.getElementById('USD'),
    gbp = document.getElementById('GBP'),
    aud = document.getElementById('AUD'),
    sek = document.getElementById('SEK');

function convert() {
    eur.innerHTML = parseFloat(input.value) * 1.95583;
    usd.innerHTML = parseFloat(input.value) * 1.652919;
    gbp.innerHTML = parseFloat(input.value) * 2.198169;
    aud.innerHTML = parseFloat(input.value) * 1.300973;
    sek.innerHTML = parseFloat(input.value) * 0.203467;
}