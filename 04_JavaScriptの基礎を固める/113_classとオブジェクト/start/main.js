const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function() {
        console.log(this.first_name + this.last_name);
    }
}

class MyObj {
    constructor() {
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }
    printFullName() {
        console.log(this.first_name + this.last_name);
    }

}

const obj2 = new MyObj();


obj.printFullName();
obj2.printFullName();