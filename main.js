const input = require('sync-input');

while(true) {
    console.log("Welcome to Currency Converter!");

    let currency = ["USD", "JPY", "EUR", "RUB", "GBP"];

    let currencyRates = {
        "USD": 1,
        "JPY": 113.5,
        "EUR": 0.89,
        "RUB": 74.36,
        "GBP": 0.75
    }

    for (let i = 0; i < currency.length; i++) {
        console.log(`1 USD equals  ${currencyRates[currency[i]]} ${currency[i]}`);
    }

    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    let exe = input("");
    if (exe === "2") {
        console.log("Have a nice day!");
        break;
    }
    else if (exe === "1") {
        while (true) {
            console.log("What do you want to convert?");
            let change = input("From:  ");
            change = change.toUpperCase();

            if (!(currency.includes(change))) {
                console.log("Unknown currency");
            } else {
                let changeTo = input("To: ");
                changeTo = changeTo.toUpperCase();
                if (!(currency.includes(changeTo))) {
                    console.log("Unknown currency");
                } else {

                    let amount = input("Amount: ");

                    if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else if (amount >= 1) {

                        let result = (amount / currencyRates[change]) * currencyRates[changeTo]
                        console.log(`Result: ${amount} ${change} equals ${result.toFixed(4)} ${changeTo}`);
                        break;

                    } else {
                        console.log("The amount can not be less than 1");
                    }
                }
            }
        }
    }
    else {
        console.log("Unknown input");
    }
}