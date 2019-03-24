// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {


    if( currency <= 0) {
        return {};
    } else if (currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    let stack = [];
    let result = {};
    let currencyExchange = currency;
    const coinTypes = [1, 5, 10, 25, 50];

    for (let i = 0; i < coinTypes.length; i++) {
        if(coinTypes[i] <= currencyExchange) {
            stack.push(coinTypes[i]);
        } else {
            break;
        }
    }

    while(stack) {
        let counter = 0;
        let coin = stack.pop();
        if(coin > currencyExchange) {
            continue;
        }
        counter = Math.floor(currencyExchange / coin);
        currencyExchange = currencyExchange % coin;
        let nameCoin = getNameCoin(coin);
        result[nameCoin] = counter;
        if(!currencyExchange) {
            break;}

    }
    return result;
};
function getNameCoin(coin) {
    let coinId="";
    if(coin == 50) {
        coinId = "H";
    } else if (coin == 25) {
        coinId = "Q"
    } else if (coin == 10) {
        coinId = "D"
    } else if (coin == 5) {
        coinId = "N"
    } else if (coin == 1) {
        coinId = "P"
    }
    return coinId;
}