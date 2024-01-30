function cat(array) {
    class Cat {
        constructor(name,age) {
            this.name=name;
            this.age=age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let currentCat of array) {
        let tokens=currentCat.split(` `);
        let name=tokens[0];
        let age=tokens[1];
        let printCat=new Cat(name,age);
        printCat.meow()
    }
}

cat(['Mellow 2', 'Tom 5'])