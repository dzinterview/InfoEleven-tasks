/**
 * JS method that acceppts Gross price and calculates Net price out of given tax (VAT) rate as parameter. 
 * @param {number} grossPrice 
 * @param {number} VAT 
 */
let netPrice = (grossPrice, VAT) => { 
    if (isNaN(grossPrice) || isNaN(VAT)) {
        return 'Please use only numbers or Please enter a number value for VAT'
    } else {
        return  Number(((Number(grossPrice) / 100) * (Number(VAT) + 100)).toFixed(2))
    }
}

module.exports = netPrice;