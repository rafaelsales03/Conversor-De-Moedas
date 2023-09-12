const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".switch-currency")


function convertValue(){

    const inputValue = document.querySelector(".input-value").value
    
    
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")  //Valor em real
    const currencyValueConverted = document.querySelector(".currency-value")  //Outra moeda

    console.log(currencySelect.value)
    
    const dolarToday = 4.25
    const euroToday = 5.3
    const libraToday = 6.17
    const bitcoinToday = 129.431
    


    if(currencySelect.value == "dolar"){

        
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {

        style: "currency",
        currency: "USD"

    }).format(inputValue / dolarToday)


    }

    if(currencySelect.value == "euro"){

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"

        }).format(inputValue / euroToday)

    }

    
    if(currencySelect.value == "libra"){

        
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
    
            style: "currency",
            currency: "GBP"
    
        }).format(inputValue / libraToday)

    }
    


      
    if(currencySelect.value == "bitcoin"){

        
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
    
            style: "currency",
            currency: "XBT"
    
        }).format(inputValue / bitcoinToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {

        style: "currency",
        currency: "BRL"

    }).format(inputValue)
    

}

function changeCurrency(){
    
    const currencyName = document.querySelector(".currency")
    const currencyImg = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){

        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"

    }


    if(currencySelect.value == "euro"){

        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"

    }

    if(currencySelect.value == "libra"){

        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"

    }

    if(currencySelect.value == "bitcoin"){

        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"

    }


    convertValue()

}

currencySelect.addEventListener("change" , changeCurrency)
convertButton.addEventListener("click" , convertValue)



