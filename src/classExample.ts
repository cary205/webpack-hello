interface ClockInterface {
    currentTime: Date;
}

class Animal implements ClockInterface {
    currentTime: Date = new Date();
    private id: number;
    public name: string;
    constructor(theId: number, theName: string, private aaa: string, public bbb: string) {
        this.id = theId;
        this.name = theName;
    }
    public chgName(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(private color: string) {
        super(1, "Dog", "aaa", "bbb");
    }
}

export { ClockInterface, Animal, Dog };


// let x: Animal = new Animal(1, "Cat", "aaa", "bbb");
// console.log(x.name);
// console.log(x.id); //restrict by typescript
