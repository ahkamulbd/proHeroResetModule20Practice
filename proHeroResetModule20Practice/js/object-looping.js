var shoppingCart = {
    books: 3,
    keyboard: 5,
    sunglass: 1,
    mouse: 1,
    pen: 25,
    printer: 7
}

const keys = Object.keys(shoppingCart);
const values = Object.values(shoppingCart);
//console.log(keys, values);

// for (var i = 0; i < keys.length; i++) {
//     var propertyName = keys[i];
//     var propertyValue = shoppingCart[propertyName];
//     console.log(propertyName, propertyValue);
// }

for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}