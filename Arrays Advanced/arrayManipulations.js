function arrayManipulations(inputArray) {
    let array = inputArray[0].split(` `);
    for (i = 1; i < inputArray.length; i++) {
        let commands = inputArray[i].split(` `);
        if (commands[0] == `Add`) {
            add(array, commands[1]);
        } else if (commands[0] == `Remove`) {
            remove(array, commands[1]);
        } else if (commands[0] == `RemoveAt`) {
            removeAt(array, commands[1]);
        } else if (commands[0] == `Insert`) {
            insert(array, commands[1], commands[2]);
        }
    }
    console.log(array.join(` `));
    function add(array, pushNum) {
        array.push(Number(pushNum))
    }
    function remove(array, removeNum) {
        for (j = 0; j < array.length; j++) {
            if (Number(array[j]) == Number(removeNum)) {
                array.splice(j, 1);
            }
        }
    }
    function removeAt(array, indexRemove) {
        array.splice(Number(indexRemove), 1);
    }
    function insert(array, num, idx) {
        array.splice(idx, 0, num);
    }
}

arrayManipulations(['4 19 2 53 6 43',

    'Add 3',

    'Remove 2',

    'RemoveAt 1',

    'Insert 8 3'])