"use strict";
function isPrimo(num) {
    let countPrimos = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            countPrimos++;
        }
    }
    if (countPrimos <= 2) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isPrimo(5));
