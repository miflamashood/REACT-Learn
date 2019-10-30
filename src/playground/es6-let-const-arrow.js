var nameVar = 'andrew';
var nameVar = 'Yusra Adnan';
console.log('nameVar', nameVar);

//no duplicate declaration
let namelet = 'Mifla';
 namelet = 'Mif mas';
console.log('nameLet', namelet);

//no redefining with const
const namecost = 'red';
console.log('namecost', namecost);

if (nameVar) {
    var firstname = nameVar.split(' ')[0];
    console.log(firstname);
}
console.log(firstname);

if (namelet) {
    let thsName = namelet.split(' ')[0];
    console.log(thsName);
}
//console.log('s'+thsName);


//verbose arrow func
const y = (y) => { return y * y;};

//expression arrow func
const x = x => (x * x);

console.log(x(5));
console.log(y(10));

const thisname = (fullname,dd) => { return fullname.split(' ')[0]+' '+dd};
const myname = (fullname) => fullname.split(' ')[0];

console.log(thisname(namelet,'mm'));
console.log(myname(nameVar));

const multiplier = {
    numbers: [9, 7, 12],
    multiplyBy: 3,
    add() {
        let total = 0;
         this.numbers.map((number) => { total = total + number;});
        return total;
        //return this.numbers.forEach((number) => this.multiplyBy * number);
    },
    multiply() {
        return this.numbers.map((number) => this.multiplyBy* number);
    }
};

console.log(multiplier.multiply());

console.log(multiplier.add());