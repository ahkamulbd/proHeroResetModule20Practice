// var booksObject = {
//     python: 11,
//     JavaScript: 12,
//     React: 5,
//     RProgramming: 3,
//     Node: 6
// }

// var keys = Object.keys(booksObject);
// //var values = Object.values(booksObject);

// for (var i = 0; i < keys.length; i++) {
//     var propertyName = keys[i];
//     var propertyValue = booksObject[propertyName];
//     console.log(propertyName, propertyValue);
// }

let manuPlayersGoal = {
    Rashi: 30,
    Antony: 19,
    Martial: 21,
    Kasemiro: 6,
    Martinez: 3,
    Garnacho: 11
}

let keys = Object.keys(manuPlayersGoal);

for (let i = 0; i < keys.length; i++) {
    let propertyName = keys[i];
    let propertyValue = manuPlayersGoal[propertyName];
    console.log(propertyName, propertyValue);
}