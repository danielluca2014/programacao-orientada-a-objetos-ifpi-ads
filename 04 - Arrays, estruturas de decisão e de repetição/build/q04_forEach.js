"use strict";
let arr = [5, 6, 7, 8, 9];
let novoArr = "";
arr.forEach(function (element, index) {
    if (index !== arr.length - 1) {
        novoArr += element + "-";
    }
    else {
        novoArr += element;
    }
});
console.log(novoArr);
