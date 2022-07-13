class Animal {
    constructor() {
        this.name = "Lion"
    }
    age = 0;
}

//That will be complied to:
    class Animal {
        constructor() {
            this.age = 0;
            this.name = "Lion";
        }
    }
//Especially react developers can relate easily state! and initialProps!:
    class Animal {
        constructor() {
            this.name = "Lion"
        }
        age = 0;
        state = {
        }
        initialProps = {
        }
    }