function commonElements(array1,array2) {
    for (i=0;i<array1.length;i++) {
        for (j=0;j<array2.length;j++) {
            if (array1[i]===array2[j]) {
                console.log(array2[j]);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2'])