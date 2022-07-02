class Custom{
    a;
    b;
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        console.log(this.a + this.b);
    }
}

let custom = new Custom(10,20);
console.log(custom.add());
