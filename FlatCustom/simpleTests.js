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

const arr1 = [[2], 3, {}, [1, 2]] 
const arr2 = [2, 3, [[1, {a: "text"}], [[2]]], 5] 
const arr3 = [5, {a: 1}, [ 1,[ 3, {}, {c: "a", d: [2, 2]} ] ,[[ 6 ]]]] 


console.log(arr1.flatCustom()) // [2, 3, 1, 2]
console.log(arr2.flatCustom()) // [2, 3, 1, "text", 2, 5]
console.log(arr3.flatCustom()) // [5, 1, 1, 3, "a", 2, 2, 6]
