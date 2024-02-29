function inventory(array) {
    let journal=array.shift().split(`, `);
    let index=0;
    while(index < array.length && array[index]!=`Craft`) {
        let tokens=array[index].split(` `);
        if (tokens[0]==`Collect`) {
            collect(tokens[2]);
        } else if (tokens[0]==`Drop`) {
            drop(tokens[2]);
        } else if (tokens[0]==`Combine`) {
            let combineSplit=tokens[3].split(`:`);
            let oldItem=combineSplit[0];
            let newItem=combineSplit[1];
            combine(oldItem,newItem);
        } else if (tokens[0]==`Renew`) {
            renew(tokens[2]);
        }
        index++;
    }
    function collect(a) {
        if (journal.includes(a)==false) {
            journal.push(a);
        } 
    }
    function drop(b) {
        if (journal.includes(b)==true) {
            let idx=journal.indexOf(b);
            journal.splice(idx,1);
        }
    }
    function combine(old,n) {
        if (journal.includes(old)==true) {
            let idx=journal.indexOf(old);
            journal.splice(idx+1,0,n);
        }
    }
    function renew(d) {
        if (journal.includes(d)==true) {
            let temp=d;
            let idx=journal.indexOf(d);
            journal.splice(idx,1);
            journal.push(temp);
        }
    }
    console.log(journal.join(`, `));
}

inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ])
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])