class Person {
    constructor(name='anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getDesc() {
        return(    `Hi ${this.name} , are you ${this.age}?`)
    }
}

class Traveler extends Person {
    constructor(name, age, homelocation) {
        super(name,age);
           this.homelocation = homelocation;
    }

    isLocationFilled() {
        return !!this.homelocation;
    }

    getDesc() {
      
        if (this.isLocationFilled()) {
            console.log(this.isLocationFilled());
          let desc = super.getDesc();
             desc +=`are you located at ${this.homelocation}`;
           console.log(desc);
        }
        else {
            console.log(super.getDesc());;
        }       
    }
}

const me = new Traveler("Mifla", 39,"Muscat");
console.log(me);
me.getDesc();

const you = new Traveler();
console.log(you);
you.getDesc();