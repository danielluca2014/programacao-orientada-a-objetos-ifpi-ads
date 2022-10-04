function exibir(...elements: string[]) {
    for (let element of elements) {
       console.log(element);
    }
}

exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");