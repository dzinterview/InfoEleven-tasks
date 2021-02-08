/**
 * Custom flat function for arrays
 */
Array.prototype.flatCustom = function () {
    var newArray = [];
    this.forEach(item => {
        if (Array.isArray(item)) {
            newArray = newArray.concat(item.flatCustom());
        } else if (item.constructor === Object) {
            Object.values(item).forEach(itemObject => {
                Array.isArray(itemObject) ? newArray = newArray.concat(itemObject.flatCustom()) : newArray.push(itemObject)
            })
        } else {
            newArray.push(item);
        }
    })
    return newArray;
}

