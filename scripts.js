const botaoConversor = document.querySelector(".botao-conversor")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-moeda").value
    const currencyValueToConvert = document.querySelector(".moeda-valor-real")
    const currencyValueConverted = document.querySelector(".moeda-valor-dolar")
    console.log(currencySelect.value)

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.8



    if (currencySelect.value == "dolar") {
        // se o select estiver selecionado o valor de dolar ,entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)


    }

    if (currencySelect.value == "euro") {
        // se o select estiver selecionado o valor de euro ,entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "libra") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraToday)
        }



    



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("moeda-nome")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolár americano"
        currencyImage.src = "./assets/USA.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "/assets/Euro.png"
    }
    
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "/assets/libra.png" 
    }


    convertValues()

}


currencySelect.addEventListener("change", changeCurrency)
botaoConversor.addEventListener("click", convertValues)
