function calculate() {
    const inputValue = document.getElementById('inputVariable').value;

    const result = inputValue * 2;

    document.getElementById('result').innerText = 'Wynik: ' + result;
}
