let arr: number[] = [5, 6, 7, 8, 9];
let novoArr: string = "";

arr.forEach(function(element, index) {
    if (index !== arr.length - 1) {
        novoArr += element + "-"
    } else {
        novoArr += element
    }
});

console.log(novoArr);