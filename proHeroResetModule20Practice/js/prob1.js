/*
    ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 
*/

function timeTable13(number) {
    let multiple = 1;
    for (let i = 1; i <= 10; i++) {
        multiple = multiple * i;
        console.log(i + ' X ' + number + '=' + multiple);
    }

}

timeTable13(13);
