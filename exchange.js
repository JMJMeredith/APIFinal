const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const API_KEY = "YQkgdt+GRxShdkARaBBr7A==98r4hlrCq7qXKBfY"
const apiUrl = " https://api.api-ninjas.com/v1/exchangerate?pair=USD_ "

convert.addEventListener('click', () => 
{
    const amountTotal = amount.value;
    const currencyTotal =currency.value;
    const url = apiUrl + currencyTotal;

    fetch(url,
        {
        headers: {
            'X-API-KEY': apiKey
        }
    })
    .then(response => response.json())
    .then (data => {
        const rate = data.rate;
        const result = amountTotal * rate;
        result.innerHTML = '${amount} ${currency} = ${result.toFixed(2)} usd';
    })
    .catch.error('request failed', error);
    result.innerHTML = "Error, please try again."
    })
