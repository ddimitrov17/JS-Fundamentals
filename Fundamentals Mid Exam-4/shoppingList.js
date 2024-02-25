function shoppingList(array) {
    let list=array.shift().split(`!`);
    let i=0;
    while (array[i]!=`Go Shopping!`) {
        let command=array[i].split(` `);
        if (command[0]==`Urgent`) {
            urgent(command[1]);
        } else if (command[0]==`Unnecessary`) {
            unnecessary(command[1]);
        } else if (command[0]==`Correct`) {
            correct(command[1],command[2])
        } else if (command[0]==`Rearrange`) {
            rearrange(command[1]);
        } else {
            continue;
        }
        i++;
    }
    function urgent(item) {
        if (list.includes(item) == false) {
            list.unshift(item);
        }
    }
    function unnecessary(item) {
        for (let b of list) {
            if (b==item) {
                let idx=list.indexOf(b);
                list.splice(idx,1);
            }
        }
    }
    function correct(oldItem,newItem) {
        for (let c of list) {
            if (c==oldItem) {
                let idx=list.indexOf(c);
                list[idx]=newItem;
            }
        }
    }
    function rearrange(item) {
        for (let d of list) {
            if (d==item) {
                let idx=list.indexOf(d);
                list.splice(idx,1);
                list.push(item);
            }
        }
    }
    console.log(list.join(`, `));
}

shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])