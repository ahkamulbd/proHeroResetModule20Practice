var shoppingCart = {
    books: 3,
    keyboard: 5,
    sunglass: 1,
    mouse: 1,
    pen: 25,
    printer: 7
}
console.log(shoppingCart);

var penCount = shoppingCart.pen;
console.log(penCount);

var keyboardCount = shoppingCart['keyboard'];
console.log(keyboardCount);

var propertiesOfShoppingCart = Object.keys(shoppingCart);
console.log(propertiesOfShoppingCart);

var valuesOfShoppingCart = Object.values(shoppingCart);
console.log(valuesOfShoppingCart);

var propertyName = 'printer';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);