// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    if (currency <= 0)
        return {};
    if (currency > 10000)
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    const halfDollars = Math.floor(currency / 50);
    let moneyLeft = currency % 50;

    const quarters = Math.floor(moneyLeft / 25);
    moneyLeft = moneyLeft % 25;

    const dimes = Math.floor(moneyLeft / 10);
    moneyLeft = moneyLeft % 10;

    const nickels = Math.floor(moneyLeft / 5);
    moneyLeft = moneyLeft % 5;

    const result = {};
    if (halfDollars > 0)
        result["H"] = halfDollars;
    if (quarters > 0)
        result["Q"] = quarters;
    if (dimes > 0)
        result["D"] = dimes;
    if (nickels > 0)
        result["N"] = nickels;
    if (moneyLeft > 0)
        result["P"] = moneyLeft;

    return result
};

